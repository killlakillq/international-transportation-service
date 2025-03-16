import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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

@ObjectType()
@Entity('tickets')
export class Ticket {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column()
  public issue: string;

  @Field()
  @Column({
    type: 'enum',
    enum: TicketStatus,
    default: TicketStatus.Opened,
  })
  public status: TicketStatus;

  @Field(() => User)
  @ManyToOne(() => User)
  public user: User;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;
}
