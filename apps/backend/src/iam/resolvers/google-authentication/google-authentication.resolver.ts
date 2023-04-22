import { Inject } from '@nestjs/common';
import {
  Args,
  Context,
  GqlExecutionContext,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { Auth } from 'src/iam/decorators/auth.decorator';
import { GoogleTokenInput } from 'src/iam/dto/google-token.input';
import { LoggedInUserData } from 'src/iam/dto/logged-in-user-data.output';
import { AuthType } from 'src/iam/enums/auth-type.enum';
import { AuthenticationService } from 'src/iam/services/authentication/authentication.service';
import { GoogleAuthenticationService } from 'src/iam/services/google-authentication/google-authentication.service';

@Auth(AuthType.None)
@Resolver()
export class GoogleAuthenticationResolver {
  @Inject(AuthenticationService)
  private readonly authService!: AuthenticationService;
  @Inject(GoogleAuthenticationService)
  private readonly googleAuthService!: GoogleAuthenticationService;

  @Mutation(() => LoggedInUserData)
  async googleAuthenticate(
    @Args('googleTokenInput') googleTokenInput: GoogleTokenInput,
    @Context() ctx: GqlExecutionContext,
  ) {
    const { tokensData, user } = await this.googleAuthService.authenticate(
      googleTokenInput.token,
    );
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
}
