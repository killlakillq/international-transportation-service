import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Delivery {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
