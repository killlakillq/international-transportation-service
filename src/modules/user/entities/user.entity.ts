import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { Order } from '@/modules/order/entities/order.entity';
import { Role } from '@/common/interfaces/enums/role.enum';

@Entity('users')
@Index('email_index', ['email'], { unique: true })
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({ nullable: true })
  public refreshToken: string;

  @Column()
  public phone: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Customer,
  })
  public role: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  public createdAt: Date;

  @OneToMany(() => Shipment, (shipment) => shipment.user)
  public shipments: Shipment[];

  @OneToMany(() => Order, (order) => order.user)
  public orders: Order[];
}
