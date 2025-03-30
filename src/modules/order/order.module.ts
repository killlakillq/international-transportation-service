import { Module } from '@nestjs/common';
import { OrderService } from '@/modules/order/order.service';
import { OrderRepository } from '@/modules/order/order.repository';
import { OrderController } from '@/modules/order/order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
