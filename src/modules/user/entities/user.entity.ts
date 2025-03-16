import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { Order } from '@/modules/order/entities/order.entity';

export const Role = {
  Customer: 'customer',
  Driver: 'driver',
  Admin: 'admin',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

registerEnumType(Role, {
  name: 'Role',
  description: 'The role of the user.',
});

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

  @Field(() => [Shipment])
  @OneToMany(() => Shipment, (shipment) => shipment.user)
  public shipments: Shipment[];

  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.user)
  public orders: Order[];
}
