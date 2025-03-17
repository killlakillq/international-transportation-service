import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationInput } from '@/modules/notification/dto/create-notification.input';
import { UpdateNotificationInput } from '@/modules/notification/dto/update-notification.input';
import { NotificationRepository } from '@/modules/notification/notification.repository';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class NotificationService {
  public constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  public async create(createNotificationInput: CreateNotificationInput) {
    return this.notificationRepository.createNotification(
      createNotificationInput,
    );
  }

  public async find() {
    return this.notificationRepository.find();
  }

  public async findById(id: string) {
    const notification = await this.notificationRepository.findById(id);

    if (!notification) {
      throw new NotFoundException(EXCEPTION.RATE.NOT_FOUND);
    }

    return notification;
  }

  public async update(
    id: string,
    updateNotificationInput: UpdateNotificationInput,
  ) {
    const notification = await this.findById(id);

    return this.notificationRepository.update(
      notification.id,
      updateNotificationInput,
    );
  }

  public async delete(id: string) {
    const notification = await this.findById(id);

    return this.notificationRepository.delete(notification.id);
  }
}
