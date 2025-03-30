import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  public async create(createUserDto: CreateUserDto) {
    const user = await this.findByEmail(createUserDto.email);

    if (user) {
      throw new BadRequestException(EXCEPTION.USER.ALREADY_EXISTS);
    }

    return this.userRepository.createUser(createUserDto);
  }

  public async findById(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException(EXCEPTION.USER.NOT_FOUND);
    }

    return user;
  }

  public async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  public async updateRefreshToken(id: string, refreshToken: string) {
    return this.userRepository.updateRefreshToken(id, refreshToken);
  }
}
