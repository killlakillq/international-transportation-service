import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateShipmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
