import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '@/config';
import { queryLogger } from '@/logger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.dbConfig,
      logger: queryLogger,
    }),
  ],
})
export class AppModule {}
