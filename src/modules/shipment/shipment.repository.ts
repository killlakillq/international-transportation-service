import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Shipment } from './entities/shipment.entity';
import { CreateShipmentDto } from './dto/create-shipment.dto';

@Injectable()
export class ShipmentRepository extends BaseRepository<Shipment> {
  public constructor(dataSource: DataSource) {
    super(Shipment, dataSource);
  }

  public async createShipment(createShipmentDto: CreateShipmentDto) {
    const metadata = this.create(createShipmentDto);

    return this.save(metadata);
  }
}
