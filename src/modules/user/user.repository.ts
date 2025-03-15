import { BaseRepository } from '@/database/typeorm/base-repository';
import { User } from '@/modules/user/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  public constructor(dataSource: DataSource) {
    super(User, dataSource);
  }
}
