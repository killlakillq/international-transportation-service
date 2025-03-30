import { OrderStatus } from '@/common/interfaces/enums/order-status.enum';
import { User } from '@/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

@Entity('orders')
export class Order {
  @ApiProperty({ example: 'Order ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Type(() => Number)
  @Column({ type: 'float', name: 'total_amount' })
  public totalAmount: number;

  @ApiProperty({ example: OrderStatus.Pending })
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Pending,
  })
  @IsEnum(OrderStatus)
  public status: string;

  @ApiProperty({ example: new Date() })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public orderDate: Date;

  @ApiProperty({ example: 'User' })
  @ManyToOne(() => User, (user) => user.orders)
  public user: Relation<User>;
}
