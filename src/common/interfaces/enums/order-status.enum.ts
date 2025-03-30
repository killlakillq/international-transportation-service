export const OrderStatus = {
  Pending: 'pending',
  Completed: 'completed',
  Canceled: 'canceled',
} as const;

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
