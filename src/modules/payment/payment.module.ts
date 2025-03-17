import { Module } from '@nestjs/common';
import { PaymentService } from '@/modules/payment/payment.service';
import { PaymentResolver } from '@/modules/payment/payment.resolver';
import { PaymentRepository } from '@/modules/payment/payment.repository';

@Module({
  providers: [PaymentResolver, PaymentService, PaymentRepository],
})
export class PaymentModule {}
