import { Module } from '@nestjs/common';
import { TicketService } from '@/modules/ticket/ticket.service';
import { TicketRepository } from '@/modules/ticket/ticket.repository';
import { TicketController } from '@/modules/ticket/ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from '@/modules/ticket/entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  providers: [TicketService, TicketRepository],
  controllers: [TicketController],
})
export class TicketModule {}
