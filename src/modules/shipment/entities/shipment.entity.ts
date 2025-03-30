import { ShipmentStatus } from '@/common/interfaces/enums/shipment-status.enum';
import { Route } from '@/modules/route/entities/route.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Vehicle } from '@/modules/vehicle/entities/vehicle.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  type Relation,
  Index,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('shipments')
@Index('tracking_number_index', ['trackingNumber'], { unique: true })
export class Shipment {
  @ApiProperty({ example: 'Shipment ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'Tracking Number' })
  @Column({ name: 'tracking_number', unique: true })
  public trackingNumber: string;

  @ApiProperty({ example: 100 })
  @Column({ type: 'float' })
  public weight: number;

  @ApiProperty({ example: ShipmentStatus.Pending })
  @Column({
    type: 'enum',
    enum: ShipmentStatus,
    default: ShipmentStatus.Pending,
  })
  public status: string;

  @ApiProperty({ example: 'User' })
  @ManyToOne(() => User, (user) => user.shipments)
  public user: Relation<User>;

  @ApiProperty({ example: 'Route' })
  @ManyToOne(() => Route)
  public route: Relation<Route>;

  @ApiProperty({ example: 'Vehicle' })
  @ManyToOne(() => Vehicle)
  public vehicle: Relation<Vehicle>;
}
