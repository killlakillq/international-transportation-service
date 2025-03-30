import { CreateShipmentDto } from './create-shipment.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}
