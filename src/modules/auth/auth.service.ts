import {
  ForbiddenException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Crypto } from '@/common/utils/crypto.util';
import { TokenService } from './token.service';
import { EXCEPTION } from '@/common/constants/exception.constant';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  public constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  public async register(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);

    if (user) {
      throw new BadRequestException(EXCEPTION.USER.ALREADY_EXISTS);
    }

    const hashedPassword = Crypto.encrypt(createUserDto.password);

    await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    const tokens = await this.tokenService.generateTokens(user.id, user.email);

    return {
      tokens,
    };
  }

  public async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByEmail(loginUserDto.email);

    if (!user) {
      throw new BadRequestException(EXCEPTION.USER.LOGIN_OR_PASSWORD_WRONG);
    }

    const hashedPassword = Crypto.encrypt(loginUserDto.password);

    if (hashedPassword !== user.password) {
      throw new BadRequestException(EXCEPTION.USER.LOGIN_OR_PASSWORD_WRONG);
    }

    const tokens = await this.tokenService.generateTokens(user.id, user.email);

    return {
      tokens,
    };
  }

  public async updateTokens(id: string) {
    const user = await this.userService.findById(id);

    if (!user || !user.refreshToken) {
      throw new ForbiddenException(EXCEPTION.AUTH.TOKEN_INVALID);
    }

    if (user.refreshToken) {
      const hashedRefreshToken = Crypto.encrypt(user.refreshToken);

      if (hashedRefreshToken !== user.refreshToken) {
        throw new ForbiddenException(EXCEPTION.AUTH.TOKEN_INVALID);
      }
    }

    const tokens = await this.tokenService.generateTokens(user.id, user.email);

    await this.tokenService.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }
}
