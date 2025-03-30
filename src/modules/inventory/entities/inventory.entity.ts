import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('inventories')
@Index('product_name_index', ['productName'], { unique: true })
export class Inventory {
  @ApiProperty({ example: 'Inventory ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'Product Name' })
  @Column({ name: 'product_name' })
  public productName: string;

  @ApiProperty({ example: 100 })
  @Column({ type: 'integer' })
  public quantity: number;

  @ApiProperty({ example: 100 })
  @Column({ type: 'float' })
  public weight: number;

  @ApiProperty({ example: 'Location' })
  @Column()
  public location: string;
}
