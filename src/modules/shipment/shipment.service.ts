import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShipmentInput } from './dto/create-shipment.input';
import { UpdateShipmentInput } from './dto/update-shipment.input';
import { ShipmentRepository } from './shipment.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class ShipmentService {
  public constructor(private readonly shipmentRepository: ShipmentRepository) {}

  public async create(createShipmentInput: CreateShipmentInput) {
    return this.shipmentRepository.createShipment(createShipmentInput);
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

  public async update(id: string, updateShipmentInput: UpdateShipmentInput) {
    const shipment = await this.findById(id);

    return this.shipmentRepository.update(shipment.id, updateShipmentInput);
  }

  public async delete(id: string) {
    const shipment = await this.findById(id);

    return this.shipmentRepository.delete(shipment.id);
  }
}
