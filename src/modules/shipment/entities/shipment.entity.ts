import { ShipmentStatus } from '@/common/interfaces/enums/shipment-status.enum';
import { Route } from '@/modules/route/entities/route.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
} from 'typeorm';

@ObjectType()
@Entity('shipments')
export class Shipment {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ name: 'tracking_number', unique: true })
  public trackingNumber: string;

  @Field(() => Float)
  @Column({ type: 'float' })
  public weight: number;

  @Field(() => ShipmentStatus)
  @Column({
    type: 'enum',
    enum: ShipmentStatus,
    default: ShipmentStatus.Pending,
  })
  public status: ShipmentStatus;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.shipments)
  public user: Relation<User>;

  @Field(() => Route)
  @ManyToOne(() => Route)
  public route: Relation<Route>;

  @Field(() => Vehicle)
  @ManyToOne(() => Vehicle)
  public vehicle: Relation<Vehicle>;
}
