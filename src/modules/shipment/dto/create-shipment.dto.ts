import { PickType } from '@nestjs/swagger';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';

export class CreateShipmentDto extends PickType(Shipment, [
  'status',
  'trackingNumber',
  'weight',
] as const) {}
