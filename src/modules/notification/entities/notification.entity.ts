import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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

@ObjectType()
@Entity('notifications')
export class Notification {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column()
  public message: string;

  @Field()
  @Column({
    type: 'enum',
    enum: NotificationStatus,
    default: NotificationStatus.Unread,
  })
  public status: NotificationStatus;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  public createdAt: Date;

  @Field(() => User)
  @ManyToOne(() => User)
  public user: User;
}
