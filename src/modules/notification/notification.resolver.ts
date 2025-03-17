import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from '@/modules/notification/notification.service';
import { Notification } from '@/modules/notification/entities/notification.entity';
import { CreateNotificationInput } from '@/modules/notification/dto/create-notification.input';
import { UpdateNotificationInput } from '@/modules/notification/dto/update-notification.input';

@Resolver(() => Notification)
export class NotificationResolver {
  public constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Mutation(() => Notification, { name: 'createNotification' })
  public async create(
    @Args('createNotificationInput')
    createNotificationInput: CreateNotificationInput,
  ) {
    return this.notificationService.create(createNotificationInput);
  }

  @Query(() => [Notification], { name: 'findNotifications' })
  public async find() {
    return this.notificationService.find();
  }

  @Query(() => Notification, { name: 'findNotificationById' })
  public async findById(@Args('id') id: string) {
    return this.notificationService.findById(id);
  }

  @Mutation(() => Notification, { name: 'updateNotification' })
  public async update(
    @Args('updateNotificationInput')
    updateNotificationInput: UpdateNotificationInput,
  ) {
    return this.notificationService.update(
      updateNotificationInput.id,
      updateNotificationInput,
    );
  }

  @Mutation(() => Notification, { name: 'deleteNotification' })
  public async delete(@Args('id') id: string) {
    return this.notificationService.delete(id);
  }
}
