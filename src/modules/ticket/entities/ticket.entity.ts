import { TicketStatus } from '@/common/interfaces/enums/ticket-status.enum';
import { User } from '@/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tickets')
@Index('issue_index', ['issue'], { unique: true })
export class Ticket {
  @ApiProperty({ example: 'Ticket ID' })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({ example: 'Issue' })
  @Column()
  public issue: string;

  @ApiProperty({ example: TicketStatus.Opened })
  @Column({
    type: 'enum',
    enum: TicketStatus,
    default: TicketStatus.Opened,
  })
  public status: string;

  @ApiProperty({ example: 'User' })
  @ManyToOne(() => User)
  public user: User;

  @ApiProperty({ example: new Date() })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date;
}
