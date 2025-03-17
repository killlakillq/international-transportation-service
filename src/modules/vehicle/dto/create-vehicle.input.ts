import { InputType, PickType } from '@nestjs/graphql';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';

@InputType()
export class CreateVehicleInput extends PickType(
  Vehicle,
  ['licensePlate', 'vehicleType', 'maxCapacity'] as const,
  InputType,
) {}
