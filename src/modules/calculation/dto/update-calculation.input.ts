import { CreateCalculationInput } from './create-calculation.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCalculationInput extends PartialType(
  CreateCalculationInput,
) {
  @Field(() => String)
  readonly id: string;
}
