import { PickType } from '@nestjs/swagger';
import { Order } from '../entities/order.entity';

export class CreateOrderDto extends PickType(Order, [
  'status',
  'totalAmount',
] as const) {}
