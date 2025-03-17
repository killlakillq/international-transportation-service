import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from '@/modules/order/order.service';
import { Order } from '@/modules/order/entities/order.entity';
import { CreateOrderInput } from '@/modules/order/dto/create-order.input';
import { UpdateOrderInput } from '@/modules/order/dto/update-order.input';

@Resolver(() => Order)
export class OrderResolver {
  public constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order, { name: 'createOrder' })
  public async create(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ) {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'findOrders' })
  public async find() {
    return this.orderService.find();
  }

  @Query(() => Order, { name: 'findOrderById' })
  public async findById(@Args('id') id: string) {
    return this.orderService.findById(id);
  }

  @Mutation(() => Order, { name: 'updateOrder' })
  public async update(
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order, { name: 'deleteOrder' })
  public async delete(@Args('id') id: string) {
    return this.orderService.delete(id);
  }
}
