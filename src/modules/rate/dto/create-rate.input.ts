import { InputType, PickType } from '@nestjs/graphql';
import { Rate } from '../entities/rate.entity';

@InputType()
export class CreateRateInput extends PickType(
  Rate,
  ['basePrice', 'pricePerKg'] as const,
  InputType,
) {}
