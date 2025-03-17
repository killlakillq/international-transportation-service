import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Route } from '@/modules/route/entities/route.entity';

@ObjectType()
@Entity('rates')
export class Rate {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field(() => Float)
  @Column({ type: 'float', name: 'price_per_kg' })
  public pricePerKg: number;

  @Field(() => Float)
  @Column({ type: 'float', name: 'base_price' })
  public basePrice: number;

  @Field(() => Route)
  @ManyToOne(() => Route)
  public route: Route;
}
