import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import { CreateVehicleInput } from '@/modules/vehicle/dto/create-vehicle.input';

@Injectable()
export class VehicleRepository extends BaseRepository<Vehicle> {
  public constructor(dataSource: DataSource) {
    super(Vehicle, dataSource);
  }

  public async createVehicle(createVehicleInput: CreateVehicleInput) {
    const metadata = this.create(createVehicleInput);

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
