import { InputType, PickType } from '@nestjs/graphql';
import { Calculation } from '../entities/calculation.entity';

@InputType()
export class CreateCalculationInput extends PickType(
  Calculation,
  ['cost', 'distance', 'weight'] as const,
  InputType,
) {}
