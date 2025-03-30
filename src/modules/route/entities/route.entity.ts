import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

@Entity('routes')
export class Route {
  @ApiProperty({ example: 'Route ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'Estimated Time' })
  @IsString()
  @Column({ name: 'estimated_time' })
  public estimatedTime: string;

  @ApiProperty({ example: 'From' })
  @IsString()
  @Column()
  public from: string;

  @ApiProperty({ example: 'To' })
  @IsString()
  @Column()
  public to: string;

  @ApiProperty({ example: '2500 miles' })
  @IsString()
  @Column()
  public distance: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Type(() => Number)
  @Column()
  public price: number;
}
