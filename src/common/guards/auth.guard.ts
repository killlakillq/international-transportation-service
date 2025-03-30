import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { type Request } from 'express';
import { TokenService } from '@/modules/auth/token.service';
import { Token } from '@/common/interfaces/tokens/token.enum';
import { EXCEPTION } from '@/common/constants/exception.constant';
@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private readonly tokenService: TokenService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const tokenType = this.getTokenTypeFromContext(context);
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new ForbiddenException(EXCEPTION.AUTH.TOKEN_INVALID);
    }

    try {
      const payload = await this.tokenService.verifyToken(token, tokenType);

      request['user'] = payload;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new UnauthorizedException(error.message);
      }
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private getTokenTypeFromContext(context: ExecutionContext): Token {
    const handler = context.getHandler();
    const requiredTokenType = Reflect.getMetadata('tokenType', handler);

    return requiredTokenType as Token;
  }
}
