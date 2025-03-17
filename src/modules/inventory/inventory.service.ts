import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryInput } from '@/modules/inventory/dto/create-inventory.input';
import { UpdateInventoryInput } from '@/modules/inventory/dto/update-inventory.input';
import { InventoryRepository } from '@/modules/inventory/inventory.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class InventoryService {
  public constructor(
    private readonly inventoryRepository: InventoryRepository,
  ) {}

  public async create(createInventoryInput: CreateInventoryInput) {
    return this.inventoryRepository.createInventory(createInventoryInput);
  }

  public async find() {
    return this.inventoryRepository.find();
  }

  public async findById(id: string) {
    const inventory = await this.inventoryRepository.findById(id);

    if (!inventory) {
      throw new NotFoundException(EXCEPTION.INVENTORY.NOT_FOUND);
    }

    return inventory;
  }

  public async update(id: string, updateInventoryInput: UpdateInventoryInput) {
    const inventory = await this.findById(id);

    return this.inventoryRepository.update(inventory.id, updateInventoryInput);
  }

  public async delete(id: string) {
    const inventory = await this.findById(id);

    return this.inventoryRepository.delete(inventory.id);
  }
}
