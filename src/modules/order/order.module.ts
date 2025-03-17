import { Module } from '@nestjs/common';
import { OrderService } from '@/modules/order/order.service';
import { OrderResolver } from '@/modules/order/order.resolver';
import { OrderRepository } from '@/modules/order/order.repository';

@Module({
  providers: [OrderResolver, OrderService, OrderRepository],
})
export class OrderModule {}
