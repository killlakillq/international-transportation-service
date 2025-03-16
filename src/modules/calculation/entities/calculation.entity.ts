import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('calculations')
export class Calculation {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ type: 'float' })
  public weight: number;

  @Field()
  @Column({ type: 'float' })
  public distance: number;

  @Field()
  @Column({ type: 'float' })
  public cost: number;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'calculated_at',
  })
  public calculatedAt: Date;
}
