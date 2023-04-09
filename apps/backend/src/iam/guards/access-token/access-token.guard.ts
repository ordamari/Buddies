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
import {
  COOKIES_ACCESS_TOKEN_KEY,
  REQUEST_USER_KEY,
} from 'src/iam/iam.constants';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  @Inject(JwtService)
  private readonly jwtService!: JwtService;
  @Inject(jwtConfig.KEY)
  private readonly jwtConfiguration!: ConfigType<typeof jwtConfig>;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;
    const token = this.extractTokenFromRequest(request);
    if (!token) throw new UserInputError('No access token provided');
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        this.jwtConfiguration,
      );
      request[REQUEST_USER_KEY] = payload;
    } catch (e) {
      throw new UserInputError('Invalid access token');
    }
    return true;
  }

  private extractTokenFromRequest(request: Request) {
    const token = request.cookies[COOKIES_ACCESS_TOKEN_KEY];
    return token;
  }
}
