import { InputType, PickType } from '@nestjs/graphql';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';

@InputType()
export class CreateShipmentInput extends PickType(
  Shipment,
  ['status', 'trackingNumber', 'weight'] as const,
  InputType,
) {}
