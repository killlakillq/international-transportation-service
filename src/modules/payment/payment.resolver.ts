import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentService } from '@/modules/payment/payment.service';
import { Payment } from '@/modules/payment/entities/payment.entity';
import { CreatePaymentInput } from '@/modules/payment/dto/create-payment.input';
import { UpdatePaymentInput } from '@/modules/payment/dto/update-payment.input';

@Resolver(() => Payment)
export class PaymentResolver {
  public constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => Payment, { name: 'createPayment' })
  public async create(
    @Args('createPaymentInput') createPaymentInput: CreatePaymentInput,
  ) {
    return this.paymentService.create(createPaymentInput);
  }

  @Query(() => [Payment], { name: 'findPayments' })
  public async find() {
    return this.paymentService.find();
  }

  @Query(() => Payment, { name: 'findPaymentById' })
  public async findById(@Args('id') id: string) {
    return this.paymentService.findById(id);
  }

  @Mutation(() => Payment, { name: 'updatePayment' })
  public async update(
    @Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput,
  ) {
    return this.paymentService.update(
      updatePaymentInput.id,
      updatePaymentInput,
    );
  }

  @Mutation(() => Payment, { name: 'deletePayment' })
  public async delete(@Args('id') id: string) {
    return this.paymentService.delete(id);
  }
}
