import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
  JoinColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity('vechicles')
export class Vehicle {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ name: 'license_plate', unique: true })
  public licensePlate: string;

  @Field()
  @Column({ name: 'vehicle_type' })
  public vehicleType: string;

  @Field()
  @Column({ type: 'float', name: 'max_capacity' })
  public maxCapacity: number;

  @Field(() => User)
  @ManyToOne(() => User)
  @JoinColumn({ name: 'driver_id' })
  public driver: Relation<User>;
}
