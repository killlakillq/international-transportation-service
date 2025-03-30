export const Role = {
  Customer: 'customer',
  Driver: 'driver',
  Admin: 'admin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];
