import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export const DeliveryStatus = {
  Pending: 'pending',
  InTransit: 'in_transit',
  Delivered: 'delivered',
  Failed: 'failed',
} as const;

export type DeliveryStatus =
  (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

registerEnumType(DeliveryStatus, {
  name: 'DeliveryStatus',
  description: 'The status of the delivery.',
});

@ObjectType()
@Entity('deliveries')
export class Delivery {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'delivered_at',
  })
  public deliveredAt: Date;

  @Field()
  @Column({
    type: 'enum',
    enum: DeliveryStatus,
    default: DeliveryStatus.Pending,
  })
  public status: DeliveryStatus;

  @Field()
  @ManyToOne(() => Shipment)
  public shipment: Shipment;

  @Field()
  @ManyToOne(() => Vehicle)
  public vehicle: Vehicle;
}
