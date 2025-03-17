import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShipmentService } from './shipment.service';
import { Shipment } from './entities/shipment.entity';
import { CreateShipmentInput } from './dto/create-shipment.input';
import { UpdateShipmentInput } from './dto/update-shipment.input';

@Resolver(() => Shipment)
export class ShipmentResolver {
  public constructor(private readonly shipmentService: ShipmentService) {}

  @Mutation(() => Shipment, { name: 'createShipment' })
  public async create(
    @Args('createShipmentInput') createShipmentInput: CreateShipmentInput,
  ) {
    return this.shipmentService.create(createShipmentInput);
  }

  @Query(() => [Shipment], { name: 'findShipments' })
  public async find() {
    return this.shipmentService.find();
  }

  @Query(() => Shipment, { name: 'findShipmentById' })
  public async findById(@Args('id') id: string) {
    return this.shipmentService.findById(id);
  }

  @Mutation(() => Shipment, { name: 'updateShipment' })
  public async update(
    @Args('updateShipmentInput') updateShipmentInput: UpdateShipmentInput,
  ) {
    return this.shipmentService.update(
      updateShipmentInput.id,
      updateShipmentInput,
    );
  }

  @Mutation(() => Shipment, { name: 'deleteShipment' })
  public delete(@Args('id') id: string) {
    return this.shipmentService.delete(id);
  }
}
