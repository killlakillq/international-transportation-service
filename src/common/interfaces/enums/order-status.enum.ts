import { registerEnumType } from '@nestjs/graphql';

export const OrderStatus = {
  Pending: 'pending',
  Completed: 'completed',
  Canceled: 'canceled',
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
  description: 'The status of the order.',
});
