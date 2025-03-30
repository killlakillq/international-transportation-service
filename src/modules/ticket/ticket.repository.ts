import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Ticket } from '@/modules/ticket/entities/ticket.entity';
import { CreateTicketDto } from '@/modules/ticket/dto/create-ticket.dto';

@Injectable()
export class TicketRepository extends BaseRepository<Ticket> {
  public constructor(dataSource: DataSource) {
    super(Ticket, dataSource);
  }

  public async createTicket(createTicketDto: CreateTicketDto) {
    const metadata = this.create(createTicketDto);

    return this.save(metadata);
  }
}
