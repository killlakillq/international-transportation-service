import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import config from '@/config';
import { GraphQLLoggingInterceptor } from './common/interceptors/graphql-logging.interceptor';
import { LoggerService } from '@/logger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  app.useGlobalInterceptors(new GraphQLLoggingInterceptor());
  app.use(helmet());
  app.enableCors();

  await app.listen(config.http.port);
}

void bootstrap();
