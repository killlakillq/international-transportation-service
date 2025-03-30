import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from '@/modules/order/dto/create-order.dto';
import { UpdateOrderDto } from '@/modules/order/dto/update-order.dto';
import { OrderRepository } from '@/modules/order/order.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class OrderService {
  public constructor(private readonly orderRepository: OrderRepository) {}

  public async create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.createOrder(createOrderDto);
  }

  public async find() {
    return this.orderRepository.find();
  }

  public async findById(id: string) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundException(EXCEPTION.ORDER.NOT_FOUND);
    }

    return order;
  }

  public async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.findById(id);

    return this.orderRepository.update(order.id, updateOrderDto);
  }

  public async delete(id: string) {
    const order = await this.findById(id);

    return this.orderRepository.delete(order.id);
  }
}
