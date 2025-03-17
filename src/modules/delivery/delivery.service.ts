import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliveryInput } from '@/modules/delivery/dto/create-delivery.input';
import { UpdateDeliveryInput } from '@/modules/delivery/dto/update-delivery.input';
import { DeliveryRepository } from '@/modules/delivery/delivery.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class DeliveryService {
  public constructor(private readonly deliveryRepository: DeliveryRepository) {}

  public async create(createDeliveryInput: CreateDeliveryInput) {
    return this.deliveryRepository.createDelivery(createDeliveryInput);
  }

  public async find() {
    return this.deliveryRepository.find();
  }

  public async findById(id: string) {
    const delivery = await this.deliveryRepository.findById(id);

    if (!delivery) {
      throw new NotFoundException(EXCEPTION.DOCUMENT.NOT_FOUND);
    }

    return delivery;
  }

  public async update(id: string, updateDeliveryInput: UpdateDeliveryInput) {
    const delivery = await this.findById(id);

    return this.deliveryRepository.update(delivery.id, updateDeliveryInput);
  }

  public async delete(id: string) {
    const delivery = await this.findById(id);

    return this.deliveryRepository.delete(delivery.id);
  }
}
