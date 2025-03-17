import { Delivery } from '@/modules/delivery/entities/delivery.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  type Relation,
} from 'typeorm';

@ObjectType()
@Entity('routes')
export class Route {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ name: 'estimated_time' })
  public estimatedTime: string;

  @Field()
  @Column()
  public from: string;

  @Field()
  @Column()
  public to: string;

  @Field(() => [Delivery])
  @OneToMany(() => Delivery, (delivery) => delivery.route)
  public deliveries: Relation<Delivery>[];
}
