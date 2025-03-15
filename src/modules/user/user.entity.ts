import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('users')
@Index('email', ['email'], { unique: true })
export class User {
  @Field({ nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field({ nullable: false })
  @Column({ type: 'varchar', length: 254 })
  public email: string;

  @Field({ nullable: false })
  @Column({ type: 'varchar', length: 254 })
  public password: string;

  @Field({ nullable: false })
  @CreateDateColumn({ name: 'created_at' })
  public createdDate: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ name: 'updated_at' })
  public updatedDate: Date;
}
