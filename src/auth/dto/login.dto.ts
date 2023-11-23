import { IsEmail, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class LoginDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
