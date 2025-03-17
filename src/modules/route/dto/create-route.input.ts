import { InputType, PickType } from '@nestjs/graphql';
import { Route } from '@/modules/route/entities/route.entity';

@InputType()
export class CreateRouteInput extends PickType(
  Route,
  ['estimatedTime', 'from', 'to'] as const,
  InputType,
) {}
