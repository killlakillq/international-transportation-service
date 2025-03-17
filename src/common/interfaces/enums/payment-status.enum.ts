import { registerEnumType } from '@nestjs/graphql';

export const PaymentStatus = {
  Paid: 'paid',
  Failed: 'failed',
  Pending: 'pending',
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

registerEnumType(PaymentStatus, {
  name: 'PaymentStatus',
  description: 'The status of the payment.',
});
