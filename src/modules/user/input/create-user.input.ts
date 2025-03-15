import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  readonly password: string;
}
