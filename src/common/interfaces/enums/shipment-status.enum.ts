export const ShipmentStatus = {
  Pending: 'pending',
  Shipped: 'shipped',
  InTransit: 'in_transit',
  Delivered: 'delivered',
  Canceled: 'canceled',
} as const;

export type ShipmentStatus =
  (typeof ShipmentStatus)[keyof typeof ShipmentStatus];
