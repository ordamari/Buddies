import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  Args,
  Context,
  GqlExecutionContext,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { Request } from 'express';
import jwtConfig from 'src/iam/config/jwt.config';
import { Auth } from 'src/iam/decorators/auth.decorator';
import { SignInInput } from 'src/iam/dto/sign-in.input';
import { SignUpInput } from 'src/iam/dto/sign-up.input';
import { AuthType } from 'src/iam/enums/auth-type.enum';
import { COOKIES_REFRESH_TOKEN_KEY } from 'src/iam/iam.constants';
import { LoggedInUserData } from 'src/iam/dto/logged-in-user-data.output';
import { AuthenticationService } from 'src/iam/services/authentication/authentication.service';
@Auth(AuthType.None)
@Resolver()
export class AuthenticationResolver {
  @Inject(AuthenticationService)
  private readonly authService!: AuthenticationService;
  @Inject(jwtConfig.KEY)
  private readonly jwtConfiguration!: ConfigType<typeof jwtConfig>;

  @Mutation(() => LoggedInUserData)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
    @Context() ctx: GqlExecutionContext,
  ) {
    const { tokensData, user } = await this.authService.signIn(signInInput);
    this.authService.setTokensCookie(
      ctx,
      tokensData.accessToken,
      tokensData.refreshToken,
    );

    return {
      refreshTokenExpires: tokensData.refreshTokenExpires,
      accessTokenExpires: tokensData.accessTokenExpires,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    } as LoggedInUserData;
  }

  @Mutation(() => LoggedInUserData)
  async signUp(
    @Args('signUpInput') signUpInput: SignUpInput,
    @Context() ctx: GqlExecutionContext,
  ) {
    const { user, tokensData } = await this.authService.signUp(signUpInput);
    this.authService.setTokensCookie(
      ctx,
      tokensData.accessToken,
      tokensData.refreshToken,
    );
    return {
      refreshTokenExpires: tokensData.refreshTokenExpires,
      accessTokenExpires: tokensData.accessTokenExpires,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    } as LoggedInUserData;
  }

  @Mutation(() => LoggedInUserData)
  async refreshToken(@Context() context: any) {
    const request = context.req as Request;
    const oldRefreshToken = this.authService.extractTokenFromRequest(
      request,
      COOKIES_REFRESH_TOKEN_KEY,
    );
    const { tokensData, user } = await this.authService.refreshTokens(
      oldRefreshToken,
    );

    this.authService.setTokensCookie(
      context,
      tokensData.accessToken,
      tokensData.refreshToken,
    );

    return {
      refreshTokenExpires: tokensData.refreshTokenExpires,
      accessTokenExpires: tokensData.accessTokenExpires,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    } as LoggedInUserData;
  }
}
