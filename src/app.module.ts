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
import { OriginalError } from '@/common/interfaces/original-error.interface';
import { VehicleModule } from '@/modules/vehicle/vehicle.module';
import { ShipmentModule } from '@/modules/shipment/shipment.module';
import { TicketModule } from '@/modules/ticket/ticket.module';
import { RouteModule } from '@/modules/route/route.module';
import { RateModule } from '@/modules/rate/rate.module';
import { PaymentModule } from '@/modules/payment/payment.module';
import { OrderModule } from '@/modules/order/order.module';
import { NotificationModule } from '@/modules/notification/notification.module';
import { InventoryModule } from '@/modules/inventory/inventory.module';
import { DocumentModule } from '@/modules/document/document.module';
import { DeliveryModule } from '@/modules/delivery/delivery.module';
import { CalculationModule } from '@/modules/calculation/calculation.module';
import { AuthModule } from '@/modules/auth/auth.module';

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
    VehicleModule,
    ShipmentModule,
    TicketModule,
    RouteModule,
    RateModule,
    PaymentModule,
    OrderModule,
    NotificationModule,
    InventoryModule,
    DocumentModule,
    DeliveryModule,
    CalculationModule,
    AuthModule,
  ],
})
export class AppModule {}
