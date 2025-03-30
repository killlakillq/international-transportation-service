import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from '@/database/redis/redis.module';
import { AuthController } from './auth.conroller';
@Module({
  imports: [UserModule, JwtModule.register({}), RedisModule],
  providers: [AuthService, TokenService],
  exports: [AuthService, TokenService],
  controllers: [AuthController],
})
export class AuthModule {}
