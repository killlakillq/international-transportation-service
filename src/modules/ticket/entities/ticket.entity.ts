import { TicketStatus } from '@/common/interfaces/enums/ticket-status.enum';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
