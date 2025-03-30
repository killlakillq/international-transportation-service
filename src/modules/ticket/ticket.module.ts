import { Module } from '@nestjs/common';
import { TicketService } from '@/modules/ticket/ticket.service';
import { TicketRepository } from '@/modules/ticket/ticket.repository';
import { TicketController } from '@/modules/ticket/ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from '@/modules/ticket/entities/ticket.entity';
import { RedisModule } from '@/database/redis/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), RedisModule],
  providers: [TicketService, TicketRepository],
  controllers: [TicketController],
})
export class TicketModule {}
