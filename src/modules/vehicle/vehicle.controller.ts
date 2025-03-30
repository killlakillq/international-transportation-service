import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehicleController {
  public constructor(private readonly vehicleService: VehicleService) {}

  @Post('/')
  public async create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get('/')
  public async find() {
    return this.vehicleService.find();
  }

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return this.vehicleService.findById(id);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.vehicleService.delete(id);
  }
}
