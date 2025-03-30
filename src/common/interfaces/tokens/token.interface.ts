import { JwtPayload } from 'jsonwebtoken';

export interface Token extends JwtPayload {
  id: string;
  email: string;
}

export type TokenPayload = Pick<Token, 'id' | 'email'>;
