import { SetMetadata } from '@nestjs/common';
import { Token } from '../interfaces/tokens/token.enum';

export const TokenType = (tokenType: Token) =>
  SetMetadata('tokenType', tokenType);
