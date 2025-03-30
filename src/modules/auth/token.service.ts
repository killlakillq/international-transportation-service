import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RedisService } from '@/database/redis/redis.service';
import { JwtService } from '@nestjs/jwt';
import { Crypto } from '@/common/utils/crypto.util';
import config from '@/config';
import { Token } from '@/common/interfaces/tokens/token.enum';
import { TokenPayload } from '@/common/interfaces/tokens/token.interface';

@Injectable()
export class TokenService {
  public constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly redisService: RedisService,
  ) {}

  public async updateRefreshToken(id: string, token: string): Promise<void> {
    const hashedRefreshToken = Crypto.encrypt(token);
    await this.userService.updateRefreshToken(id, hashedRefreshToken);
  }

  public async generateTokens(id: string, email: string) {
    const payload = {
      id,
      email,
    };

    const accessToken = await this.redisService.get(`access:${id}`);
    const refreshToken = await this.redisService.get(`refresh:${id}`);

    if (!accessToken || !refreshToken) {
      const [access, refresh] = await Promise.all([
        this.jwtService.signAsync(payload, {
          secret: config.jwtAccessSecret,
          expiresIn: '15m',
        }),
        this.jwtService.signAsync(payload, {
          secret: config.jwtRefreshSecret,
          expiresIn: '7d',
        }),
      ]);

      await this.redisService.set(`access:${id}`, access);
      await this.redisService.set(`refresh:${id}`, refresh);

      return {
        accessToken: access,
        refreshToken: refresh,
      };
    }

    return {
      accessToken,
      refreshToken,
    };
  }

  public async verifyToken(token: string, type: Token): Promise<TokenPayload> {
    const secret =
      type === Token.ACCESS ? config.jwtAccessSecret : config.jwtRefreshSecret;

    return this.jwtService.verifyAsync(token, {
      secret,
    });
  }
}
