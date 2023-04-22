import { InputType } from '@nestjs/graphql';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class SignUpInput {
  @IsEmail()
  email: string;

  @MinLength(2)
  @MaxLength(35)
  firstName: string;

  @MinLength(2)
  @MaxLength(35)
  lastName: string;

  @MinLength(8)
  @MaxLength(35)
  password: string;
}
