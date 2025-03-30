import { PickType } from '@nestjs/swagger';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';

export class CreateVehicleDto extends PickType(Vehicle, [
  'licensePlate',
  'vehicleType',
  'maxCapacity',
] as const) {}
