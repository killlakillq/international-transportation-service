import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';
import { TicketRepository } from './ticket.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class TicketService {
  public constructor(private readonly ticketRepository: TicketRepository) {}

  public async create(createTicketInput: CreateTicketInput) {
    return this.ticketRepository.createTicket(createTicketInput);
  }

  public async find() {
    return this.ticketRepository.find();
  }

  public async findById(id: string) {
    const ticket = await this.ticketRepository.findById(id);

    if (!ticket) {
      throw new NotFoundException(EXCEPTION.TICKET.NOT_FOUND);
    }

    return ticket;
  }

  public async update(id: string, updateTicketInput: UpdateTicketInput) {
    const ticket = await this.findById(id);

    return this.ticketRepository.update(ticket.id, updateTicketInput);
  }

  public async delete(id: string) {
    const ticket = await this.findById(id);

    return this.ticketRepository.delete(ticket.id);
  }
}
