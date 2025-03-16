import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity('inventories')
export class Inventory {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ name: 'product_name' })
  public productName: string;

  @Field()
  @Column({ type: 'integer' })
  public quantity: number;

  @Field()
  @Column({ type: 'float' })
  public weight: number;

  @Field()
  @Column()
  public location: string;
}
