import { registerEnumType } from '@nestjs/graphql';

export const Role = {
  Customer: 'customer',
  Driver: 'driver',
  Admin: 'admin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

registerEnumType(Role, {
  name: 'Role',
  description: 'The role of the user.',
});
