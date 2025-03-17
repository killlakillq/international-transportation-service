import { InputType, PickType } from '@nestjs/graphql';
import { Notification } from '@/modules/notification/entities/notification.entity';

@InputType()
export class CreateNotificationInput extends PickType(
  Notification,
  ['message', 'message'],
  InputType,
) {}
