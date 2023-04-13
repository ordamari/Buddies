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
import { TokenExpiresData } from 'src/iam/dto/token-expires-data.output';
import { AuthenticationService } from 'src/iam/services/authentication/authentication.service';
import { User } from 'src/users/entities/user.entity';
@Auth(AuthType.None)
@Resolver()
export class AuthenticationResolver {
  @Inject(AuthenticationService)
  private readonly authenticationService!: AuthenticationService;
  @Inject(jwtConfig.KEY)
  private readonly jwtConfiguration!: ConfigType<typeof jwtConfig>;

  @Mutation(() => TokenExpiresData)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
    @Context() ctx: GqlExecutionContext,
  ) {
    const {
      accessToken,
      refreshToken,
      refreshTokenExpires,
      accessTokenExpires,
    } = await this.authenticationService.signIn(signInInput);
    this.authenticationService.setTokensCookie(ctx, accessToken, refreshToken);
    return {
      refreshTokenExpires,
      accessTokenExpires,
    };
  }

  @Mutation(() => User)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authenticationService.signUp(signUpInput);
  }

  @Mutation(() => TokenExpiresData)
  async refreshToken(@Context() context: any) {
    const request = context.req as Request;
    const oldRefreshToken = this.authenticationService.extractTokenFromRequest(
      request,
      COOKIES_REFRESH_TOKEN_KEY,
    );
    const {
      accessToken,
      refreshToken,
      refreshTokenExpires,
      accessTokenExpires,
    } = await this.authenticationService.refreshTokens(oldRefreshToken);

    this.authenticationService.setTokensCookie(
      context,
      accessToken,
      refreshToken,
    );
    return {
      refreshTokenExpires,
      accessTokenExpires,
    };
  }
}
