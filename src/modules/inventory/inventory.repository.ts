import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Inventory } from '@/modules/inventory/entities/inventory.entity';
import { CreateInventoryInput } from '@/modules/inventory/dto/create-inventory.input';

@Injectable()
export class InventoryRepository extends BaseRepository<Inventory> {
  public constructor(dataSource: DataSource) {
    super(Inventory, dataSource);
  }

  public async createInventory(createInventoryInput: CreateInventoryInput) {
    const metadata = this.create(createInventoryInput);

    return this.save(metadata);
  }
}
