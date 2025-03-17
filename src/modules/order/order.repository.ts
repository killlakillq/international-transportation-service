import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Order } from '@/modules/order/entities/order.entity';
import { CreateOrderInput } from '@/modules/order/dto/create-order.input';

@Injectable()
export class OrderRepository extends BaseRepository<Order> {
  public constructor(dataSource: DataSource) {
    super(Order, dataSource);
  }

  public async createOrder(createOrderInput: CreateOrderInput) {
    const metadata = this.create(createOrderInput);

    return this.save(metadata);
  }
}
