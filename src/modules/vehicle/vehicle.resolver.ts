import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleInput } from './dto/create-vehicle.input';
import { UpdateVehicleInput } from './dto/update-vehicle.input';

@Resolver(() => Vehicle)
export class VehicleResolver {
  public constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(() => Vehicle, { name: 'createVehicle' })
  public async create(
    @Args('createVehicleInput') createVehicleInput: CreateVehicleInput,
  ) {
    return this.vehicleService.create(createVehicleInput);
  }

  @Query(() => [Vehicle], { name: 'findVehicles' })
  public async find() {
    return this.vehicleService.find();
  }

  @Query(() => Vehicle, { name: 'findVehicleById' })
  public async findById(@Args('id') id: string) {
    return this.vehicleService.findById(id);
  }

  @Mutation(() => Vehicle, { name: 'updateVehicle' })
  public async update(
    @Args('updateVehicleInput') updateVehicleInput: UpdateVehicleInput,
  ) {
    return this.vehicleService.update(
      updateVehicleInput.id,
      updateVehicleInput,
    );
  }

  @Mutation(() => Vehicle, { name: 'deleteVehicle' })
  public async delete(@Args('id') id: string) {
    return this.vehicleService.delete(id);
  }
}
