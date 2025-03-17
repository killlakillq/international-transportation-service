import { registerEnumType } from '@nestjs/graphql';

export const TicketStatus = {
  Opened: 'opened',
  Closed: 'closed',
  InProgress: 'in_progress',
} as const;

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];

registerEnumType(TicketStatus, {
  name: 'TicketStatus',
  description: 'The status of the ticket.',
});
