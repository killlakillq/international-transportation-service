import { CreateDeliveryInput } from '@/modules/delivery/dto/create-delivery.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeliveryInput extends PartialType(CreateDeliveryInput) {
  @Field(() => String)
  readonly id: string;
}
