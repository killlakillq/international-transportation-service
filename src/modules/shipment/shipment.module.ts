import { Module } from '@nestjs/common';
import { ShipmentService } from '@/modules/shipment/shipment.service';
import { ShipmentResolver } from '@/modules/shipment/shipment.resolver';
import { ShipmentRepository } from '@/modules/shipment/shipment.repository';

@Module({
  providers: [ShipmentResolver, ShipmentService, ShipmentRepository],
})
export class ShipmentModule {}
