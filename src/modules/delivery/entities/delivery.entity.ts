import { DeliveryStatus } from '@/common/interfaces/enums/delivery-status.enum';
import { Route } from '@/modules/route/entities/route.entity';
import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
} from 'typeorm';

@ObjectType()
@Entity('deliveries')
export class Delivery {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => Date)
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'delivered_at',
  })
  public deliveredAt: Date;

  @Field(() => DeliveryStatus)
  @Column({
    type: 'enum',
    enum: DeliveryStatus,
    default: DeliveryStatus.Pending,
  })
  public status: DeliveryStatus;

  @Field(() => Shipment)
  @ManyToOne(() => Shipment)
  public shipment: Relation<Shipment>;

  @Field(() => Vehicle)
  @ManyToOne(() => Vehicle)
  public vehicle: Relation<Vehicle>;

  @Field(() => Route)
  @ManyToOne(() => Route, (route) => route.deliveries)
  public route: Relation<Route>;
}
