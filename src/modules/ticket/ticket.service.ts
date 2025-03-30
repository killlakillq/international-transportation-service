import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketRepository } from './ticket.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';
import { RedisService } from '@/database/redis/redis.service';
import { Ticket } from './entities/ticket.entity';
@Injectable()
export class TicketService {
  public constructor(
    private readonly ticketRepository: TicketRepository,
    private readonly redisService: RedisService,
  ) {}

  public async create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.createTicket(createTicketDto);
  }

  public async find() {
    return this.ticketRepository.find();
  }

  public async findById(id: string) {
    const cachedTicket = await this.redisService.get(`ticket:${id}`);

    if (cachedTicket) {
      return JSON.parse(cachedTicket) as Ticket;
    }

    const ticket = await this.ticketRepository.findById(id);

    if (!ticket) {
      throw new NotFoundException(EXCEPTION.TICKET.NOT_FOUND);
    }

    await this.redisService.set(
      `ticket:${ticket.id}`,
      JSON.stringify(ticket),
      60 * 60 * 24,
    );

    return ticket;
  }

  public async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findById(id);

    return this.ticketRepository.update(ticket.id, updateTicketDto);
  }

  public async delete(id: string) {
    const ticket = await this.findById(id);

    return this.ticketRepository.delete(ticket.id);
  }
}
