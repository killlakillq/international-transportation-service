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

@Entity('vehicles')
@Index('license_plate_index', ['licensePlate'], { unique: true })
export class Vehicle {
  @ApiProperty({ example: 'Vehicle ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'License Plate' })
  @Column({ name: 'license_plate', unique: true })
  public licensePlate: string;

  @ApiProperty({ example: 'Vehicle Type' })
  @Column({ name: 'vehicle_type' })
  public vehicleType: string;

  @ApiProperty({ example: 100 })
  @Column({ type: 'float', name: 'max_capacity' })
  public maxCapacity: number;

  @ApiProperty({ example: 'Driver' })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'driver_id' })
  public driver: Relation<User>;
}
