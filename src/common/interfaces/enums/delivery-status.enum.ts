export const DeliveryStatus = {
  Pending: 'pending',
  InTransit: 'in_transit',
  Delivered: 'delivered',
  Failed: 'failed',
} as const;

export type DeliveryStatus =
  (typeof DeliveryStatus)[keyof typeof DeliveryStatus];
