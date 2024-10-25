import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../lib/entities/base.entity';
import { User } from '../users/user.entity';

@Entity({ name: 'notifications' })
export class Notification extends BaseModel {
  @ManyToOne(() => User, (user) => user.notifications, { onDelete: 'CASCADE' })
  user: User;

  @Column('text')
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'boolean', default: false })
  read: boolean;
}
