import { PickType } from '@nestjs/swagger';
import { Inventory } from '../entities/inventory.entity';

export class CreateInventoryDto extends PickType(Inventory, [
  'location',
  'weight',
  'productName',
  'quantity',
] as const) {}
