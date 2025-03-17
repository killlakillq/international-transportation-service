import { InputType, PickType } from '@nestjs/graphql';
import { Delivery } from '@/modules/delivery/entities/delivery.entity';

@InputType()
export class CreateDeliveryInput extends PickType(
  Delivery,
  ['status'] as const,
  InputType,
) {}
