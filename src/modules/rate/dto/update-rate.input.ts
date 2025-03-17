import { CreateRateInput } from './create-rate.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRateInput extends PartialType(CreateRateInput) {
  @Field(() => String)
  readonly id: string;
}
