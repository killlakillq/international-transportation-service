import { Module } from '@nestjs/common';
import { VehicleService } from '@/modules/vehicle/vehicle.service';
import { VehicleRepository } from '@/modules/vehicle/vehicle.repository';
import { VehicleController } from '@/modules/vehicle/vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehicleService, VehicleRepository],
  controllers: [VehicleController],
})
export class VehicleModule {}
