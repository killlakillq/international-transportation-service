import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity('documents')
export class Document {
  @Field(() => ID, { nullable: false })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Field()
  @Column({ name: 'file_name' })
  public fileName: string;

  @Field()
  @Column({ name: 'file_type' })
  public fileType: string;

  @Field()
  @Column()
  public url: string;

  @Field()
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'uploaded_at',
  })
  public uploadedAt: Date;
}
