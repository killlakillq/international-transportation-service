import { Module } from '@nestjs/common';
import { DeliveryService } from '@/modules/delivery/delivery.service';
import { DeliveryResolver } from '@/modules/delivery/delivery.resolver';
import { DeliveryRepository } from '@/modules/delivery/delivery.repository';

@Module({
  providers: [DeliveryResolver, DeliveryService, DeliveryRepository],
})
export class DeliveryModule {}
