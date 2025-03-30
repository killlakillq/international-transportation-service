import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('inventories')
@Controller('inventories')
export class InventoryController {
  public constructor(private readonly inventoryService: InventoryService) {}

  @Post('/')
  public async create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get('/')
  public async find() {
    return this.inventoryService.find();
  }

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return this.inventoryService.findById(id);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(id, updateInventoryDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.inventoryService.delete(id);
  }
}
