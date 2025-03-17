import { registerEnumType } from '@nestjs/graphql';

export const ShipmentStatus = {
  Pending: 'pending',
  Shipped: 'shipped',
  InTransit: 'in_transit',
  Delivered: 'delivered',
  Canceled: 'canceled',
} as const;

export type ShipmentStatus =
  (typeof ShipmentStatus)[keyof typeof ShipmentStatus];

registerEnumType(ShipmentStatus, {
  name: 'ShipmentStatus',
  description: 'The status of the shipment.',
});
