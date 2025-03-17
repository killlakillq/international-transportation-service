import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Ticket } from '@/modules/ticket/entities/ticket.entity';
import { CreateTicketInput } from '@/modules/ticket/dto/create-ticket.input';

@Injectable()
export class TicketRepository extends BaseRepository<Ticket> {
  public constructor(dataSource: DataSource) {
    super(Ticket, dataSource);
  }

  public async createTicket(createTicketInput: CreateTicketInput) {
    const metadata = this.create(createTicketInput);

    return this.save(metadata);
  }
}
