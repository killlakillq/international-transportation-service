import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('routes')
export class RouteController {
  public constructor(private readonly routeService: RouteService) {}

  @Post('/')
  public async create(@Body() createRouteDto: CreateRouteDto) {
    return this.routeService.create(createRouteDto);
  }

  @Get('/')
  public async find() {
    return this.routeService.find();
  }

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return this.routeService.findById(id);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateRouteDto: UpdateRouteDto,
  ) {
    return this.routeService.update(id, updateRouteDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.routeService.delete(id);
  }
}
