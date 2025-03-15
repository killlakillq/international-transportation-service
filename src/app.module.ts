import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '@/config';
import { queryLogger } from '@/logger';
import { UserModule } from '@/modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/libs/graphql/schema.gql'),
      include: [UserModule],
    }),
    TypeOrmModule.forRoot({
      ...config.dbConfig,
      logger: queryLogger,
    }),
    UserModule,
  ],
})
export class AppModule {}
