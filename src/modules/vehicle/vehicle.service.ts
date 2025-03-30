import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleRepository } from '@/modules/vehicle/vehicle.repository';
import { CreateVehicleDto } from '@/modules/vehicle/dto/create-vehicle.dto';
import { UpdateVehicleDto } from '@/modules/vehicle/dto/update-vehicle.dto';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class VehicleService {
  public constructor(private readonly vehicleRepository: VehicleRepository) {}

  public async create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.createVehicle(createVehicleDto);
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

  public async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    const vehicle = await this.findById(id);

    return this.vehicleRepository.update(vehicle.id, updateVehicleDto);
  }

  public async delete(id: string) {
    const vehicle = await this.findById(id);

    return this.vehicleRepository.delete(vehicle.id);
  }
}
