import { CreateCalculationInput } from './create-calculation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCalculationInput extends PartialType(
  CreateCalculationInput,
) {
  @Field(() => Int)
  id: number;
}
