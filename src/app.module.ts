import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '@/config';
import { queryLogger } from '@/logger';
import { UserModule } from '@/modules/user/user.module';
import { VehicleModule } from '@/modules/vehicle/vehicle.module';
import { ShipmentModule } from '@/modules/shipment/shipment.module';
import { TicketModule } from '@/modules/ticket/ticket.module';
import { RouteModule } from '@/modules/route/route.module';
import { OrderModule } from '@/modules/order/order.module';
import { InventoryModule } from '@/modules/inventory/inventory.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MinioModule } from '@/libs/minio/minio.module';
import { RedisModule } from '@/database/redis/redis.module';
@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
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
    OrderModule,
    InventoryModule,
    AuthModule,
    MinioModule,
    RedisModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
