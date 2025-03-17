import { CreateShipmentInput } from './create-shipment.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShipmentInput extends PartialType(CreateShipmentInput) {
  @Field(() => String)
  readonly id: string;
}
