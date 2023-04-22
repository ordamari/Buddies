import { InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class SignInInput {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
