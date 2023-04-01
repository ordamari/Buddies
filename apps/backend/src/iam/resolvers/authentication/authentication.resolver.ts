import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInInput } from 'src/iam/dto/sign-in.input';
import { SignUpInput } from 'src/iam/dto/sign-up.input';
import { AuthenticationService } from 'src/iam/services/authentication/authentication.service';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class AuthenticationResolver {
  @Inject(AuthenticationService)
  private readonly authenticationService!: AuthenticationService;

  @Mutation(() => Boolean)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.authenticationService.signIn(signInInput);
  }

  @Mutation(() => User)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authenticationService.signUp(signUpInput);
  }
}
