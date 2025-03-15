import { extname, join } from 'node:path';

import { config } from 'dotenv-safe';
import { Level } from 'pino';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

config({
  allowEmptyValues: true,
  path: join(__dirname, '..', '.env'),
  sample: join(__dirname, '..', '.env.example'),
});

const migrationsDir = join(__dirname, `migrations/*${extname(__filename)}`);
const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  url: process.env['DATABASE_URL'],
  entities: [join(__dirname, `entities/**/*${extname(__filename)}`)],
  extra: {
    application_name: 'workshop',
  },
  migrationsRun: true,
  migrations: [migrationsDir],
  synchronize: false,
};

export default {
  logLevel: process.env['LOG_LEVEL'] as Level,
  env: process.env['ENV_NAME'],
  applicationName: 'miniAppBack',
  version: process.env['VERSION'] || 'latest',
  http: {
    port: Number(process.env['PORT']),
  },
  nodeEnv: process.env['NODE_ENV'],
  jwtAccessSecret: process.env['JWT_ACCESS_SECRET'],
  jwtRefreshSecret: process.env['JWT_REFRESH_SECRET'],
  prettyLogging: process.env['PRETTY_LOGGING'],
  dbConfig,
  minio: {
    endPoint: process.env['MINIO_ENDPOINT'],
    port: Number(process.env['MINIO_PORT']),
    useSSL: Boolean(process.env['MINIO_SSL']),
    accessKey: process.env['MINIO_ACCESS_KEY'],
    secretKey: process.env['MINIO_SECRET_KEY'],
  },
  redis: {
    url: process.env['REDIS_URL'],
  },
};
