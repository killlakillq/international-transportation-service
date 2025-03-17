import { NotificationStatus } from '@/common/interfaces/enums/notification-status.enum';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
