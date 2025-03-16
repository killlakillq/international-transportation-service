import { BaseRepository } from '@/database/typeorm/base-repository';
import { User } from '@/modules/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserInput } from '@/modules/user/dto/create-user.input';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  public constructor(dataSource: DataSource) {
    super(User, dataSource);
  }

  public async createUser(createUserInput: CreateUserInput) {
    const metadata = this.create(createUserInput);

    return this.save(metadata);
  }

  public async findByEmail(email: string) {
    return this.findOne({
      where: {
        email,
      },
    });
  }
}
