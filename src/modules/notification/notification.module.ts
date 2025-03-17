import { Module } from '@nestjs/common';
import { NotificationService } from '@/modules/notification/notification.service';
import { NotificationResolver } from '@/modules/notification/notification.resolver';
import { NotificationRepository } from '@/modules/notification/notification.repository';

@Module({
  providers: [
    NotificationResolver,
    NotificationService,
    NotificationRepository,
  ],
})
export class NotificationModule {}
