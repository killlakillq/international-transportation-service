import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from '@/modules/inventory/dto/create-inventory.dto';
import { UpdateInventoryDto } from '@/modules/inventory/dto/update-inventory.dto';
import { InventoryRepository } from '@/modules/inventory/inventory.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';
import { Inventory } from './entities/inventory.entity';
import { RedisService } from '@/database/redis/redis.service';

@Injectable()
export class InventoryService {
  public constructor(
    private readonly inventoryRepository: InventoryRepository,
    private readonly redisService: RedisService,
  ) {}

  public async create(createInventoryDto: CreateInventoryDto) {
    return this.inventoryRepository.createInventory(createInventoryDto);
  }

  public async find() {
    return this.inventoryRepository.find();
  }

  public async findById(id: string) {
    const cachedInventory = await this.redisService.get(`inventory:${id}`);

    if (cachedInventory) {
      return JSON.parse(cachedInventory) as Inventory;
    }

    const inventory = await this.inventoryRepository.findById(id);

    if (!inventory) {
      throw new NotFoundException(EXCEPTION.INVENTORY.NOT_FOUND);
    }

    await this.redisService.set(
      `inventory:${id}`,
      JSON.stringify(inventory),
      60 * 60 * 24,
    );

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
