import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '@/config';
import { queryLogger } from '@/logger';
import { UserModule } from '@/modules/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GraphQLContext } from '@/common/interfaces/graphql-context.interface';
import { OriginalError } from './common/interfaces/original-error.interface';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/libs/graphql/schema.gql'),
      context: ({ req, res }: GraphQLContext): GraphQLContext => ({ req, res }),
      formatError: (error) => {
        const originalError = error.extensions[
          'originalError'
        ] as OriginalError;

        if (!originalError) {
          return {
            message: error.message,
            code: error.extensions['code'],
            locations: error.locations,
            path: error.path,
          };
        }

        return {
          message: originalError.message,
          code: originalError.error,
          statusCode: originalError.statusCode,
          locations: error.locations,
          path: error.path,
        };
      },
    }),
    TypeOrmModule.forRoot({
      ...config.dbConfig,
      logger: queryLogger,
    }),
    UserModule,
  ],
})
export class AppModule {}
