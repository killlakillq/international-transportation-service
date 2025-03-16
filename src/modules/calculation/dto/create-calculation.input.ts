import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCalculationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
