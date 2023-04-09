import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import jwtConfig from 'src/iam/config/jwt.config';
import { SignInInput } from 'src/iam/dto/sign-in.input';
import { SignUpInput } from 'src/iam/dto/sign-up.input';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
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
  @Inject(JwtService)
  private readonly jwtService!: JwtService;
  @Inject(jwtConfig.KEY)
  private readonly jwtConfiguration!: ConfigType<typeof jwtConfig>;

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

  /**
   * Signs in a user
   * @param signInInput Email, and password of the user
   * @returns JWT token
   */
  async signIn(signInInput: SignInInput) {
    const user = await this.usersService.findByEmail(signInInput.email);
    const isPasswordCorrect = await this.hashingService.compare(
      signInInput.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new UserInputError('Incorrect password');
    }
    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
      } as ActiveUserData,
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );
    return accessToken;
  }
}
