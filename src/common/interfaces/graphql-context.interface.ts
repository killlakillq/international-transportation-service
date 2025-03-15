import { type Request, type Response } from 'express';

export interface GraphQLContext {
  req: Request;
  res: Response;
}
