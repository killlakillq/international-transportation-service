export const PaymentStatus = {
  Paid: 'paid',
  Failed: 'failed',
  Pending: 'pending',
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
