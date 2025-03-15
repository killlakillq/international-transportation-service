import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { LoggerService } from '@/logger';
import config from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  await app.listen(config.http.port);
}

void bootstrap();
