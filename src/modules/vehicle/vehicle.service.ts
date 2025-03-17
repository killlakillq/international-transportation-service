import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleRepository } from '@/modules/vehicle/vehicle.repository';
import { CreateVehicleInput } from '@/modules/vehicle/dto/create-vehicle.input';
import { UpdateVehicleInput } from '@/modules/vehicle/dto/update-vehicle.input';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class VehicleService {
  public constructor(private readonly vehicleRepository: VehicleRepository) {}

  public async create(createVehicleInput: CreateVehicleInput) {
    return this.vehicleRepository.createVehicle(createVehicleInput);
  }

  public async find() {
    return this.vehicleRepository.find();
  }

  public async findById(id: string) {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new NotFoundException(EXCEPTION.VEHICLE.NOT_FOUND);
    }

    return vehicle;
  }

  public async update(id: string, updateVehicleInput: UpdateVehicleInput) {
    const vehicle = await this.findById(id);

    return this.vehicleRepository.update(vehicle.id, updateVehicleInput);
  }

  public async delete(id: string) {
    const vehicle = await this.findById(id);

    return this.vehicleRepository.delete(vehicle.id);
  }
}
