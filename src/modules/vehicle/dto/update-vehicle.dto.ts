import { CreateVehicleDto } from './create-vehicle.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}
