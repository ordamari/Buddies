import { InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

/**
 * @description Sign up data
 */
@InputType()
export class SignUpInput {
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
