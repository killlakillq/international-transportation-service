import { TokenPayload } from '@/common/interfaces/tokens/token.interface';

declare module 'express' {
  export interface Request {
    user: TokenPayload;
    refreshToken: string;
  }
}
