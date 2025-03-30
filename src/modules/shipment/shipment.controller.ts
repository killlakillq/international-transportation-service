import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@Controller('shipments')
export class ShipmentController {
  public constructor(private readonly shipmentService: ShipmentService) {}

  @Post('/')
  public async create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentService.create(createShipmentDto);
  }

  @Get('/')
  public async find() {
    return this.shipmentService.find();
  }

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return this.shipmentService.findById(id);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateShipmentDto: UpdateShipmentDto,
  ) {
    return this.shipmentService.update(id, updateShipmentDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.shipmentService.delete(id);
  }
}
