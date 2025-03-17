import { registerEnumType } from '@nestjs/graphql';

export const NotificationStatus = {
  Unread: 'unread',
  Read: 'read',
};

export type NotificationStatus =
  (typeof NotificationStatus)[keyof typeof NotificationStatus];

registerEnumType(NotificationStatus, {
  name: 'NotificationStatus',
  description: 'The status of the notification.',
});
