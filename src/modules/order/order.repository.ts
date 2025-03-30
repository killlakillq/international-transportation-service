import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Order } from '@/modules/order/entities/order.entity';
import { CreateOrderDto } from '@/modules/order/dto/create-order.dto';

@Injectable()
export class OrderRepository extends BaseRepository<Order> {
  public constructor(dataSource: DataSource) {
    super(Order, dataSource);
  }

  public async createOrder(createOrderDto: CreateOrderDto) {
    const metadata = this.create(createOrderDto);

    return this.save(metadata);
  }
}
