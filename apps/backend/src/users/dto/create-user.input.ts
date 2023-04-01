import { IsEmail, MinLength } from 'class-validator';

export class CreateUserInput {
  /**
   * @Description Email address of the user
   */
  @IsEmail()
  email: string;

  /**
   * @Description Encrypted password of the user
   */
  @MinLength(8)
  encryptedPassword: string;
}
