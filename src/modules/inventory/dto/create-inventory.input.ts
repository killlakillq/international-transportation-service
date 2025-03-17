import { InputType, PickType } from '@nestjs/graphql';
import { Inventory } from '../entities/inventory.entity';

@InputType()
export class CreateInventoryInput extends PickType(
  Inventory,
  ['location', 'weight', 'productName', 'quantity'] as const,
  InputType,
) {}
