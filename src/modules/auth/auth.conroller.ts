import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { type Request } from 'express';
import { AuthGuard } from '@/common/guards/auth.guard';
import { Token } from '@/common/interfaces/tokens/token.enum';
import { TokenType } from '@/common/decorators/token-type.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(AuthGuard)
  @TokenType(Token.REFRESH)
  @Post('refresh')
  public async refresh(@Param('id') id: string, @Req() req: Request) {
    const token = req.headers.authorization.replace('Bearer ', '');

    return this.authService.refreshToken(id, token);
  }
}
