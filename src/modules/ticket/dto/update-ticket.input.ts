import { CreateTicketInput } from './create-ticket.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTicketInput extends PartialType(CreateTicketInput) {
  @Field(() => String)
  readonly id: string;
}
