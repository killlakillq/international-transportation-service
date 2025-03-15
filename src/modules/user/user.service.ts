import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserInput } from '@/modules/user/input/create-user.input';
import { EXCEPTION } from '@/common/constants/exception.constant';

@Injectable()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  public async create(createUserInput: CreateUserInput) {
    const user = await this.findByEmail(createUserInput.email);

    if (user) {
      throw new BadRequestException(EXCEPTION.USER.ALREADY_EXISTS);
    }

    return this.userRepository.createUser(createUserInput);
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
}
