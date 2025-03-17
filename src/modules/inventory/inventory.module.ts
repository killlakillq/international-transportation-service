import { Module } from '@nestjs/common';
import { InventoryService } from '@/modules/inventory/inventory.service';
import { InventoryResolver } from '@/modules/inventory/inventory.resolver';
import { InventoryRepository } from '@/modules/inventory/inventory.repository';

@Module({
  providers: [InventoryResolver, InventoryService, InventoryRepository],
})
export class InventoryModule {}
