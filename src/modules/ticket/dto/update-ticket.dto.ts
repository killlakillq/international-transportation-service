import { CreateTicketDto } from './create-ticket.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}
