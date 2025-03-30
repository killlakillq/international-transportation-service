export const NotificationStatus = {
  Unread: 'unread',
  Read: 'read',
};

export type NotificationStatus =
  (typeof NotificationStatus)[keyof typeof NotificationStatus];
