import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import googleConfig from 'src/iam/config/google.config';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;

  @Inject(UsersService)
  private readonly usersService!: UsersService;

  @Inject(AuthenticationService)
  private readonly authService!: AuthenticationService;

  @Inject(googleConfig.KEY)
  private readonly googleConfiguration!: ConfigType<typeof googleConfig>;

  onModuleInit() {
    const clientId = this.googleConfiguration.clientId;
    const clientSecret = this.googleConfiguration.clientSecret;
    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  async authenticate(token: string) {
    try {
      const loginTicket = await this.oauthClient.verifyIdToken({
        idToken: token,
      });
      const { email, sub: googleId } = loginTicket.getPayload();
      const user = await this.usersService.findByGoogleId(googleId);
      if (user) {
        return this.authService.generateTokens(user);
      } else {
        const newUser = await this.usersService.createFromGoogle(
          email,
          googleId,
        );
        return this.authService.generateTokens(newUser);
      }
    } catch (err) {
      throw new UserInputError("Can't authenticate with this google account");
    }
  }
}
