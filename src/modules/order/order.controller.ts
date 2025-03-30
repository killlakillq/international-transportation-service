import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  public constructor(private readonly orderService: OrderService) {}

  @Post('/')
  public async create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('/')
  public async find() {
    return this.orderService.find();
  }

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return this.orderService.findById(id);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.orderService.delete(id);
  }
}
