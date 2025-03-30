import { CreateInventoryDto } from './create-inventory.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {}
