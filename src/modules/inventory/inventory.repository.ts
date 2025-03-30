import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Inventory } from '@/modules/inventory/entities/inventory.entity';
import { CreateInventoryDto } from '@/modules/inventory/dto/create-inventory.dto';

@Injectable()
export class InventoryRepository extends BaseRepository<Inventory> {
  public constructor(dataSource: DataSource) {
    super(Inventory, dataSource);
  }

  public async createInventory(createInventoryDto: CreateInventoryDto) {
    const metadata = this.create(createInventoryDto);

    return this.save(metadata);
  }
}
