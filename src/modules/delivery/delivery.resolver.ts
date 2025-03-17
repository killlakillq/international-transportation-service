import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeliveryService } from '@/modules/delivery/delivery.service';
import { Delivery } from '@/modules/delivery/entities/delivery.entity';
import { CreateDeliveryInput } from '@/modules/delivery/dto/create-delivery.input';
import { UpdateDeliveryInput } from '@/modules/delivery/dto/update-delivery.input';

@Resolver(() => Delivery)
export class DeliveryResolver {
  public constructor(private readonly deliveryService: DeliveryService) {}

  @Mutation(() => Delivery, { name: 'createDelivery' })
  public async create(
    @Args('createDeliveryInput') createDeliveryInput: CreateDeliveryInput,
  ) {
    return this.deliveryService.create(createDeliveryInput);
  }

  @Query(() => [Delivery], { name: 'findDeliveries' })
  public async find() {
    return this.deliveryService.find();
  }

  @Query(() => Delivery, { name: 'findDeliveryById' })
  public async findById(@Args('id') id: string) {
    return this.deliveryService.findById(id);
  }

  @Mutation(() => Delivery, { name: 'updateDelivery' })
  public async update(
    @Args('updateDeliveryInput') updateDeliveryInput: UpdateDeliveryInput,
  ) {
    return this.deliveryService.update(
      updateDeliveryInput.id,
      updateDeliveryInput,
    );
  }

  @Mutation(() => Delivery, { name: 'deleteDelivery' })
  public async delete(@Args('id') id: string) {
    return this.deliveryService.delete(id);
  }
}
