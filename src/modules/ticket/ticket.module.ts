import { Module } from '@nestjs/common';
import { TicketService } from '@/modules/ticket/ticket.service';
import { TicketResolver } from '@/modules/ticket/ticket.resolver';
import { TicketRepository } from '@/modules/ticket/ticket.repository';

@Module({
  providers: [TicketResolver, TicketService, TicketRepository],
})
export class TicketModule {}
