import { Module } from '@nestjs/common';
import { InventoryService } from '@/modules/inventory/inventory.service';
import { InventoryRepository } from '@/modules/inventory/inventory.repository';
import { InventoryController } from '@/modules/inventory/inventory.controller';
import { Inventory } from './entities/inventory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@/database/redis/redis.module';
@Module({
  imports: [TypeOrmModule.forFeature([Inventory]), RedisModule],
  providers: [InventoryService, InventoryRepository],
  controllers: [InventoryController],
})
export class InventoryModule {}
