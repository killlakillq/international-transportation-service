import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TicketService } from '@/modules/ticket/ticket.service';
import { Ticket } from '@/modules/ticket/entities/ticket.entity';
import { CreateTicketInput } from '@/modules/ticket/dto/create-ticket.input';
import { UpdateTicketInput } from '@/modules/ticket/dto/update-ticket.input';

@Resolver(() => Ticket)
export class TicketResolver {
  public constructor(private readonly ticketService: TicketService) {}

  @Mutation(() => Ticket, { name: 'createTicket' })
  public async create(
    @Args('createTicketInput') createTicketInput: CreateTicketInput,
  ) {
    return this.ticketService.create(createTicketInput);
  }

  @Query(() => [Ticket], { name: 'findTickets' })
  public async find() {
    return this.ticketService.find();
  }

  @Query(() => Ticket, { name: 'findTicketById' })
  public async findById(@Args('id') id: string) {
    return this.ticketService.findById(id);
  }

  @Mutation(() => Ticket, { name: 'updateTicket' })
  public async update(
    @Args('updateTicketInput') updateTicketInput: UpdateTicketInput,
  ) {
    return this.ticketService.update(updateTicketInput.id, updateTicketInput);
  }

  @Mutation(() => Ticket, { name: 'deleteTicket' })
  public async delete(@Args('id') id: string) {
    return this.ticketService.delete(id);
  }
}
