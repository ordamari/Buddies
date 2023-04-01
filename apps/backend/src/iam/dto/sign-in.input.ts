import { InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

/**
 * Sign in data
 */
@InputType()
export class SignInInput {
  /**
   * @Description Email address of the user
   */
  @IsEmail()
  email: string;

  /**
   * @Description Password of the user
   */
  @MinLength(8)
  password: string;
}
