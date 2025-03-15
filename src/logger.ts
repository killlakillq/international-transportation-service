import { AsyncLocalStorage } from 'async_hooks';
import { randomBytes } from 'crypto';

import { Logger as TypeOrmLogger, QueryRunner } from 'typeorm';
import { LoggerService as LoggerServiceInterface } from '@nestjs/common';
import Pino, { Logger, destination, Level, LoggerOptions } from 'pino';
import { PrettyOptions } from 'pino-pretty';

import config from '@/config';

const asyncLocalStorage = new AsyncLocalStorage<string>();

export function setTraceId(requestId?: string) {
  const traceId = requestId || randomBytes(16).toString('hex');
  asyncLocalStorage.enterWith(traceId);
  return traceId;
}

const prettyConfig: PrettyOptions = {
  colorize: true,
  levelFirst: true,
  ignore: 'serviceContext',
  translateTime: 'SYS:HH:MM:ss.l',
};

const options: LoggerOptions = {
  level: config.logLevel,
  base: {
    serviceContext: {
      service: config.applicationName,
      version: config.version,
    },
  },
  redact: {
    paths: ['pid', 'hostname', 'variables.createUserInput.password'],
    remove: true,
  },
  transport:
    Number(config.prettyLogging) > 0
      ? {
          target: 'pino-pretty',
          options: prettyConfig,
        }
      : undefined,
};

const stdout = Pino(options);
const stderr = Pino(options, destination(2));

const logger: Pick<Logger, Level> = {
  trace: stdout.trace.bind(stdout),
  debug: stdout.debug.bind(stdout),
  info: stdout.info.bind(stdout),
  warn: stdout.warn.bind(stdout),
  error: stderr.error.bind(stderr),
  fatal: stderr.fatal.bind(stderr),
};

export default logger;

export class LoggerService implements LoggerServiceInterface {
  public error(message: unknown, trace?: string, context?: string) {
    logger.error({
      err: {
        message,
        stack: trace,
        context,
      },
    });
  }

  public warn(message: string) {
    logger.warn(message);
  }

  public log(message: string) {
    logger.info(message);
  }

  public debug(message: string) {
    logger.debug(message);
  }

  public verbose(message: string) {
    logger.trace(message);
  }
}

class QueryLogger implements TypeOrmLogger {
  public logQuery(
    query: string,
    parameters?: unknown[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _queryRunner?: QueryRunner,
  ) {
    if (query === 'SELECT 1') return;
    logger.debug({ query, parameters }, 'New DB query');
  }

  public logQueryError(
    _error: string,
    query: string,
    parameters?: unknown[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _queryRunner?: QueryRunner,
  ) {
    logger.warn({ query, parameters }, 'Errored DB query');
  }

  public logQuerySlow(
    time: number,
    query: string,
    parameters?: unknown[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _queryRunner?: QueryRunner,
  ) {
    logger.warn({ query, parameters, time }, 'Slow DB query');
  }

  public logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    logger.trace(message, queryRunner);
  }

  public logMigration(message: string, queryRunner?: QueryRunner) {
    logger.info(message, queryRunner);
  }

  public log(
    level: 'log' | 'info' | 'warn',
    message: unknown,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _queryRunner?: QueryRunner,
  ) {
    switch (level) {
      case 'log':
      case 'info':
        logger.trace({ message }, 'DB log');
        break;
      case 'warn':
        logger.warn({ message }, 'DB warn');
        break;
    }
  }
}

export const queryLogger = new QueryLogger();
