import { OrderStatus } from '@/common/interfaces/enums/order-status.enum';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
} from 'typeorm';

@ObjectType()
@Entity('orders')
export class Order {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'float', name: 'total_amount' })
  public totalAmount: number;

  @Field(() => OrderStatus)
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Pending,
  })
  public status: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public orderDate: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.orders)
  public user: Relation<User>;
}
