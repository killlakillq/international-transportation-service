import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity('routes')
export class Route {
  @ApiProperty({ example: 'Route ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'Estimated Time' })
  @Column({ name: 'estimated_time' })
  public estimatedTime: string;

  @ApiProperty({ example: 'From' })
  @Column()
  public from: string;

  @ApiProperty({ example: 'To' })
  @Column()
  public to: string;

  @ApiProperty({ example: 100 })
  @Column()
  public distance: number;

  @ApiProperty({ example: 100 })
  @Column()
  public price: number;
}
