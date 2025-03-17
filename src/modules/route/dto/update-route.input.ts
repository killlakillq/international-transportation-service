import { CreateRouteInput } from './create-route.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRouteInput extends PartialType(CreateRouteInput) {
  @Field(() => String)
  readonly id: string;
}
