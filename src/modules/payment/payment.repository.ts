import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Payment } from '@/modules/payment/entities/payment.entity';
import { CreatePaymentInput } from '@/modules/payment/dto/create-payment.input';

@Injectable()
export class PaymentRepository extends BaseRepository<Payment> {
  public constructor(dataSource: DataSource) {
    super(Payment, dataSource);
  }

  public async createPayment(createPaymentInput: CreatePaymentInput) {
    const metadata = this.create(createPaymentInput);

    return this.save(metadata);
  }
}
