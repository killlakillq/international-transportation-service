import { BaseRepository } from '@/database/typeorm/base-repository';
import { User } from '@/modules/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  public constructor(dataSource: DataSource) {
    super(User, dataSource);
  }

  public async createUser(createUserDto: CreateUserDto) {
    const metadata = this.create(createUserDto);

    return this.save(metadata);
  }

  public async findByEmail(email: string) {
    return this.findOne({
      where: {
        email,
      },
    });
  }

  public async updateRefreshToken(id: string, refreshToken: string) {
    return this.update(id, {
      refreshToken,
    });
  }
}
