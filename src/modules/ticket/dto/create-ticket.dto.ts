import { PickType } from '@nestjs/swagger';
import { Ticket } from '../entities/ticket.entity';

export class CreateTicketDto extends PickType(Ticket, [
  'issue',
  'status',
] as const) {}
