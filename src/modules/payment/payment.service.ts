import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { PaymentRepository } from './payment.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class PaymentService {
  public constructor(private readonly paymentRepository: PaymentRepository) {}

  public async create(createPaymentInput: CreatePaymentInput) {
    return this.paymentRepository.createPayment(createPaymentInput);
  }

  public async find() {
    return this.paymentRepository.find();
  }

  public async findById(id: string) {
    const payment = await this.paymentRepository.findById(id);

    if (!payment) {
      throw new NotFoundException(EXCEPTION.PAYMENT.NOT_FOUND);
    }

    return payment;
  }

  public async update(id: string, updatePaymentInput: UpdatePaymentInput) {
    const payment = await this.findById(id);

    return this.paymentRepository.update(payment.id, updatePaymentInput);
  }

  public async delete(id: string) {
    const payment = await this.findById(id);

    return this.paymentRepository.delete(payment.id);
  }
}
