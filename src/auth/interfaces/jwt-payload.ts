import { ObjectId } from 'mongoose';

export interface JwtPayload {
  id: string;
  iat?: number;
  exp?: number;
}
