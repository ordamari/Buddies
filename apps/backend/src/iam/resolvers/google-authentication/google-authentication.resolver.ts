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
import { TokenExpiresData } from 'src/iam/dto/token-expires-data.output';
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

  @Mutation(() => TokenExpiresData)
  async googleAuthenticate(
    @Args('googleTokenInput') googleTokenInput: GoogleTokenInput,
    @Context() ctx: GqlExecutionContext,
  ) {
    const {
      accessToken,
      refreshToken,
      refreshTokenExpires,
      accessTokenExpires,
    } = await this.googleAuthService.authenticate(googleTokenInput.token);
    this.authService.setTokensCookie(ctx, accessToken, refreshToken);

    return {
      refreshTokenExpires,
      accessTokenExpires,
    };
  }
}
