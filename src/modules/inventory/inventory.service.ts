import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from '@/modules/inventory/dto/create-inventory.dto';
import { UpdateInventoryDto } from '@/modules/inventory/dto/update-inventory.dto';
import { InventoryRepository } from '@/modules/inventory/inventory.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class InventoryService {
  public constructor(
    private readonly inventoryRepository: InventoryRepository,
  ) {}

  public async create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryRepository.createInventory(createInventoryDto);
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

  public async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    const inventory = await this.findById(id);

    return this.inventoryRepository.update(inventory.id, updateInventoryDto);
  }

  public async delete(id: string) {
    const inventory = await this.findById(id);

    return this.inventoryRepository.delete(inventory.id);
  }
}
