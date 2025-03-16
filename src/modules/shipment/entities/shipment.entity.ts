import { Route } from '@/modules/route/entities/route.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
} from 'typeorm';

export const ShipmentStatus = {
  Pending: 'pending',
  Shipped: 'shipped',
  InTransit: 'in_transit',
  Delivered: 'delivered',
  Canceled: 'canceled',
} as const;

export type ShipmentStatus =
  (typeof ShipmentStatus)[keyof typeof ShipmentStatus];

registerEnumType(ShipmentStatus, {
  name: 'ShipmentStatus',
  description: 'The status of the shipment.',
});

@ObjectType()
@Entity('shipments')
export class Shipment {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ name: 'tracking_number', unique: true })
  public trackingNumber: string;

  @Field(() => Route)
  @ManyToOne(() => Route)
  public route: Route;

  @Field(() => Vehicle)
  @ManyToOne(() => Vehicle)
  public vehicle: Vehicle;

  @Field()
  @Column({ type: 'float' })
  public weight: number;

  @Field()
  @Column({
    type: 'enum',
    enum: ShipmentStatus,
    default: ShipmentStatus.Pending,
  })
  public status: ShipmentStatus;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.shipments)
  public user: Relation<User>;
}
