import { Shipment } from '@/modules/shipment/entities/shipment.entity';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export const PaymentStatus = {
  Paid: 'paid',
  Failed: 'failed',
  Pending: 'pending',
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

registerEnumType(PaymentStatus, {
  name: 'PaymentStatus',
  description: 'The status of the payment.',
});

@ObjectType()
@Entity('payments')
export class Payment {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'float' })
  public amount: number;

  @Field()
  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.Pending,
  })
  public status: PaymentStatus;

  @Field()
  @Column({ name: 'payment_method' })
  public paymentMethod: string;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'payment_date',
  })
  public paymentDate: Date;

  @Field(() => User)
  @ManyToOne(() => User)
  public user: User;

  @Field(() => Shipment)
  @ManyToOne(() => Shipment)
  public shipment: Shipment;
}
