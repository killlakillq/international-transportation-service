import { Module } from '@nestjs/common';
import { InventoryService } from '@/modules/inventory/inventory.service';
import { InventoryRepository } from '@/modules/inventory/inventory.repository';
import { InventoryController } from '@/modules/inventory/inventory.controller';
import { Inventory } from './entities/inventory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  providers: [InventoryService, InventoryRepository],
  controllers: [InventoryController],
})
export class InventoryModule {}
