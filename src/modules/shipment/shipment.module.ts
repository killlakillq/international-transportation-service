import { Module } from '@nestjs/common';
import { ShipmentService } from '@/modules/shipment/shipment.service';
import { ShipmentRepository } from '@/modules/shipment/shipment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { ShipmentController } from './shipment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment])],
  providers: [ShipmentService, ShipmentRepository],
  controllers: [ShipmentController],
})
export class ShipmentModule {}
