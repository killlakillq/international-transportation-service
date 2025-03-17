import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Shipment } from './entities/shipment.entity';
import { CreateShipmentInput } from './dto/create-shipment.input';

@Injectable()
export class ShipmentRepository extends BaseRepository<Shipment> {
  public constructor(dataSource: DataSource) {
    super(Shipment, dataSource);
  }

  public async createShipment(createShipmentInput: CreateShipmentInput) {
    const metadata = this.create(createShipmentInput);

    return this.save(metadata);
  }
}
