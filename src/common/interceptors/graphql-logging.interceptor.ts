import {
  CallHandler,
  ExecutionContext,
  HttpException,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import logger, { setTraceId } from 'src/logger';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Level } from 'pino';

export class GraphQLLoggingInterceptor implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const traceId = setTraceId(request.header('X-Request-Id') as string);

    ctx.getContext().res.set('X-Request-Id', traceId);

    const params = {
      operationName:
        ctx.getInfo().operation.name?.value || 'Anonymous Operation',
      variables: ctx.getArgs(),
      traceId,
    };

    logger.debug(params, `GraphQL request started`);
    const startedAt = process.hrtime.bigint();

    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof HttpException) {
          const status = err.getStatus();
          const level: Level =
            500 <= status && status <= 599 ? 'error' : 'debug';
          logger[level](
            { ...params, duration: this.fromStarted(startedAt), err },
            `GraphQL request finished with error`,
          );
          return throwError(() => err);
        }
        logger.error(
          { ...params, duration: this.fromStarted(startedAt), err },
          `GraphQL request finished with error`,
        );
        return throwError(() => new InternalServerErrorException(err.message));
      }),
      tap(() => {
        logger.debug(
          { ...params, duration: this.fromStarted(startedAt) },
          `GraphQL request finished`,
        );
      }),
    );
  }

  private fromStarted(startedAt: bigint): number {
    return (
      parseFloat((process.hrtime.bigint() - startedAt).toString()) / 10 ** 9
    );
  }
}
