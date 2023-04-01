import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInInput } from 'src/iam/dto/sign-in.input';
import { SignUpInput } from 'src/iam/dto/sign-up.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';
import { Repository } from 'typeorm';
import { HashingService } from '../hashing/hashing.service';

@Injectable()
export class AuthenticationService {
  @Inject(HashingService)
  private readonly hashingService!: HashingService;
  @Inject(UsersService)
  private readonly usersService!: UsersService;

  /**
   * Signs up a user
   * @param signUpInput Email, and password of the user
   * @returns the created user
   */
  async signUp(signUpInput: SignUpInput): Promise<User> {
    const encryptedPassword = await this.hashingService.hash(
      signUpInput.password,
    );
    return this.usersService.create({
      ...signUpInput,
      encryptedPassword,
    });
  }

  async signIn(signInInput: SignInInput) {
    const user = await this.usersService.findByEmail(signInInput.email);
    const isPasswordCorrect = await this.hashingService.compare(
      signInInput.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new UserInputError('Incorrect password');
    }
    return true;
  }
}
