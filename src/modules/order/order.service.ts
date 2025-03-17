import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderInput } from '@/modules/order/dto/create-order.input';
import { UpdateOrderInput } from '@/modules/order/dto/update-order.input';
import { OrderRepository } from '@/modules/order/order.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class OrderService {
  public constructor(private readonly orderRepository: OrderRepository) {}

  public async create(createOrderInput: CreateOrderInput) {
    return this.orderRepository.createOrder(createOrderInput);
  }

  public async find() {
    return this.orderRepository.find();
  }

  public async findById(id: string) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundException(EXCEPTION.PAYMENT.NOT_FOUND);
    }

    return order;
  }

  public async update(id: string, updateOrderInput: UpdateOrderInput) {
    const order = await this.findById(id);

    return this.orderRepository.update(order.id, updateOrderInput);
  }

  public async delete(id: string) {
    const order = await this.findById(id);

    return this.orderRepository.delete(order.id);
  }
}
