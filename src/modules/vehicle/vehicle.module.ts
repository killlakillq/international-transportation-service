import { Module } from '@nestjs/common';
import { VehicleService } from '@/modules/vehicle/vehicle.service';
import { VehicleResolver } from '@/modules/vehicle/vehicle.resolver';
import { VehicleRepository } from '@/modules/vehicle/vehicle.repository';

@Module({
  providers: [VehicleResolver, VehicleService, VehicleRepository],
})
export class VehicleModule {}
