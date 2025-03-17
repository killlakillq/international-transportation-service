import { InputType, PickType } from '@nestjs/graphql';
import { Ticket } from '../entities/ticket.entity';

@InputType()
export class CreateTicketInput extends PickType(
  Ticket,
  ['issue', 'status'] as const,
  InputType,
) {}
