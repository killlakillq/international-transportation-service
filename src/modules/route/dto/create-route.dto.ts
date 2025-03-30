import { PickType } from '@nestjs/swagger';
import { Route } from '@/modules/route/entities/route.entity';

export class CreateRouteDto extends PickType(Route, [
  'estimatedTime',
  'from',
  'to',
  'distance',
  'price',
] as const) {}
