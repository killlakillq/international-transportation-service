import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Entity('vehicles')
@Index('license_plate_index', ['licensePlate'], { unique: true })
export class Vehicle {
  @ApiProperty({ example: 'Vehicle ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'License Plate' })
  @IsString()
  @Column({ name: 'license_plate', unique: true })
  public licensePlate: string;

  @ApiProperty({ example: 'Vehicle Type' })
  @IsString()
  @Column({ name: 'vehicle_type' })
  public vehicleType: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Type(() => Number)
  @Column({ type: 'float', name: 'max_capacity' })
  public maxCapacity: number;

  @ApiProperty({ example: 'Driver' })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'driver_id' })
  public driver: Relation<User>;
}
