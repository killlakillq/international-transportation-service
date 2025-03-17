import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { Order } from '@/modules/order/entities/order.entity';
import { Role } from '@/common/interfaces/enums/role.enum';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column()
  public name: string;

  @Field()
  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Field()
  @Column()
  public phone: string;

  @Field()
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Customer,
  })
  public role: string;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  public createdAt: Date;

  @Field(() => [Shipment])
  @OneToMany(() => Shipment, (shipment) => shipment.user)
  public shipments: Shipment[];

  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.user)
  public orders: Order[];
}
