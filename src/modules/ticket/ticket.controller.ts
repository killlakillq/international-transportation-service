import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('tickets')
export class TicketController {
  public constructor(private readonly ticketService: TicketService) {}

  @Post('/')
  public async create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get('/')
  public async find() {
    return this.ticketService.find();
  }

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return this.ticketService.findById(id);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.ticketService.delete(id);
  }
}
