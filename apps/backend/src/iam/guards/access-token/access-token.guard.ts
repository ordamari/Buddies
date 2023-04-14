import { UserInputError } from '@nestjs/apollo';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import jwtConfig from 'src/iam/config/jwt.config';
import { REQUEST_USER_KEY } from 'src/iam/iam.constants';
import { AuthenticationService } from 'src/iam/services/authentication/authentication.service';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  @Inject(JwtService)
  private readonly jwtService!: JwtService;
  @Inject(jwtConfig.KEY)
  private readonly jwtConfiguration!: ConfigType<typeof jwtConfig>;
  @Inject(AuthenticationService)
  private readonly authenticationService!: AuthenticationService;

  async SetUserInfoInRequest(request: Request) {
    const token = this.authenticationService.extractTokenFromRequest(request);
    if (!token) throw new UserInputError('No access token provided');
    const payload = await this.jwtService
      .verifyAsync(token, this.jwtConfiguration)
      .catch(() => {
        throw new UserInputError('Invalid access token');
      });
    request[REQUEST_USER_KEY] = payload;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;
    await this.SetUserInfoInRequest(request);
    return true;
  }
}
