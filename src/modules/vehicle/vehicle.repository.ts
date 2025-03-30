import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import { CreateVehicleDto } from '@/modules/vehicle/dto/create-vehicle.dto';

@Injectable()
export class VehicleRepository extends BaseRepository<Vehicle> {
  public constructor(dataSource: DataSource) {
    super(Vehicle, dataSource);
  }

  public async createVehicle(createVehicleDto: CreateVehicleDto) {
    const metadata = this.create(createVehicleDto);

    return this.save(metadata);
  }

  public async findByLicensePlate(licensePlate: string) {
    return this.findOne({
      where: {
        licensePlate,
      },
    });
  }
}
