import { BaseRepository } from '@/database/typeorm/base-repository';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Notification } from '@/modules/notification/entities/notification.entity';
import { CreateNotificationInput } from '@/modules/notification/dto/create-notification.input';

@Injectable()
export class NotificationRepository extends BaseRepository<Notification> {
  public constructor(dataSource: DataSource) {
    super(Notification, dataSource);
  }

  public async createNotification(
    createNotificationInput: CreateNotificationInput,
  ) {
    const metadata = this.create(createNotificationInput);

    return this.save(metadata);
  }
}
