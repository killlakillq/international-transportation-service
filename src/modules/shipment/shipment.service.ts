import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { ShipmentRepository } from './shipment.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class ShipmentService {
  public constructor(private readonly shipmentRepository: ShipmentRepository) {}

  public async create(createShipmentDto: CreateShipmentDto) {
    return this.shipmentRepository.createShipment(createShipmentDto);
  }

  public async find() {
    return this.shipmentRepository.find();
  }

  public async findById(id: string) {
    const shipment = await this.shipmentRepository.findById(id);

    if (!shipment) {
      throw new NotFoundException(EXCEPTION.SHIPMENT.NOT_FOUND);
    }

    return shipment;
  }

  public async update(id: string, updateShipmentDto: UpdateShipmentDto) {
    const shipment = await this.findById(id);

    return this.shipmentRepository.update(shipment.id, updateShipmentDto);
  }

  public async delete(id: string) {
    const shipment = await this.findById(id);

    return this.shipmentRepository.delete(shipment.id);
  }
}
