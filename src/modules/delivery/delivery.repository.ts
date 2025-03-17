import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Delivery } from '@/modules/delivery/entities/delivery.entity';
import { CreateDeliveryInput } from '@/modules/delivery/dto/create-delivery.input';

@Injectable()
export class DeliveryRepository extends BaseRepository<Delivery> {
  public constructor(dataSource: DataSource) {
    super(Delivery, dataSource);
  }

  public async createDelivery(createDeliveryInput: CreateDeliveryInput) {
    const metadata = this.create(createDeliveryInput);

    return this.save(metadata);
  }
}
