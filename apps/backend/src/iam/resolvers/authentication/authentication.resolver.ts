import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { ExecutionContextWithResponse } from 'src/common/types/execution-context-wth-response.type';
import jwtConfig from 'src/iam/config/jwt.config';
import { Auth } from 'src/iam/decorators/auth.decorator';
import { SignInInput } from 'src/iam/dto/sign-in.input';
import { SignUpInput } from 'src/iam/dto/sign-up.input';
import { AuthType } from 'src/iam/enums/auth-type.enum';
import { COOKIES_ACCESS_TOKEN_KEY } from 'src/iam/iam.constants';
import { AuthenticationService } from 'src/iam/services/authentication/authentication.service';
import { User } from 'src/users/entities/user.entity';
@Auth(AuthType.None)
@Resolver()
export class AuthenticationResolver {
  @Inject(AuthenticationService)
  private readonly authenticationService!: AuthenticationService;
  @Inject(jwtConfig.KEY)
  private readonly jwtConfiguration!: ConfigType<typeof jwtConfig>;

  @Mutation(() => Boolean)
  /**
   * @param signInInput Sign in data
   * @param context Execution context
   * @returns True if sign in was successful
   */
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
    @Context() context: ExecutionContextWithResponse,
  ) {
    const accessToken = await this.authenticationService.signIn(signInInput);
    context.res.cookie(COOKIES_ACCESS_TOKEN_KEY, accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    return true;
  }

  /**
   * @param signUpInput Sign up data
   * @returns User
   */
  @Mutation(() => User)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authenticationService.signUp(signUpInput);
  }
}
