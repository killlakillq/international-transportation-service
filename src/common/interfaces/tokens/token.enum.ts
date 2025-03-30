export const Token = {
  ACCESS: 'access',
  REFRESH: 'refresh',
} as const;

export type Token = (typeof Token)[keyof typeof Token];
