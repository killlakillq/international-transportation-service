import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

@Entity('inventories')
@Index('product_name_index', ['productName'], { unique: true })
export class Inventory {
  @ApiProperty({ example: 'Inventory ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'Product Name' })
  @Column({ name: 'product_name' })
  @IsString()
  public productName: string;

  @ApiProperty({ example: 100 })
  @Column({ type: 'integer' })
  @IsNumber()
  @Type(() => Number)
  public quantity: number;

  @ApiProperty({ example: 100 })
  @Column({ type: 'float' })
  @IsNumber()
  @Type(() => Number)
  public weight: number;

  @ApiProperty({ example: 'Location' })
  @Column()
  @IsString()
  public location: string;
}
