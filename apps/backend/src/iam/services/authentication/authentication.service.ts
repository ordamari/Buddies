import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { CookieOptions, Request, Response } from 'express';
import jwtConfig from 'src/iam/config/jwt.config';
import { SignInInput } from 'src/iam/dto/sign-in.input';
import { SignUpInput } from 'src/iam/dto/sign-up.input';
import {
  COOKIES_ACCESS_TOKEN_KEY,
  COOKIES_REFRESH_TOKEN_KEY,
} from 'src/iam/iam.constants';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { TokensData } from 'src/iam/interfaces/tokens-data.interface';
import { RefreshTokenIdsStorage } from 'src/iam/storage/refresh-token-ids.storage/refresh-token-ids.storage';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';
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
  @Inject(RefreshTokenIdsStorage)
  private readonly refreshTokenIdsStorage!: RefreshTokenIdsStorage;

  private cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  } as CookieOptions;

  async signUp(signUpInput: SignUpInput) {
    const encryptedPassword = await this.hashingService.hash(
      signUpInput.password,
    );
    const user = await this.usersService.create(
      signUpInput.email,
      encryptedPassword,
      signUpInput.firstName,
      signUpInput.lastName,
    );

    const tokensData = await this.generateTokens(user);

    return { user, tokensData };
  }

  async signIn(signInInput: SignInInput) {
    const user = await this.usersService.findByEmail(signInInput.email);
    if (!user) {
      throw new UserInputError('No user with such email');
    }
    const isPasswordCorrect = await this.hashingService.compare(
      signInInput.password,
      user.password,
    );
    if (!isPasswordCorrect) throw new UserInputError('Incorrect password');
    const tokensData = await this.generateTokens(user);
    return { tokensData, user };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const { userId, refreshTokenId } =
        await this.getIdAndUserIdFromRefreshToken(refreshToken);
      const isValidRefreshToken = await this.refreshTokenIdsStorage.validate(
        userId,
        refreshTokenId,
      );
      if (isValidRefreshToken) {
        await this.refreshTokenIdsStorage.invalidate(userId);
      } else throw new UserInputError('Invalid refresh token');

      const user = await this.usersService.findById(userId);
      if (!user) throw new UserInputError('No user with such id');
      const tokensData = await this.generateTokens(user);
      return { tokensData, user };
    } catch (e) {
      throw new UserInputError('Invalid refresh token');
    }
  }

  extractTokenFromRequest(request: Request, key = COOKIES_ACCESS_TOKEN_KEY) {
    const token = request.cookies[key];
    return token;
  }

  async generateTokens(user: User) {
    const refreshTokenId = randomUUID();

    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl, {
        refreshTokenId,
      }),
    ]);
    await this.refreshTokenIdsStorage.insert(user.id, refreshTokenId);
    return {
      accessToken,
      refreshToken,
      accessTokenExpires: new Date(
        Date.now() + this.jwtConfiguration.accessTokenTtl * 1000,
      ),
      refreshTokenExpires: new Date(
        Date.now() + this.jwtConfiguration.refreshTokenTtl * 1000,
      ),
    } as TokensData;
  }

  setTokensCookie(context: any, accessToken: string, refreshToken: string) {
    const response = context.res as Response;
    response.cookie(COOKIES_ACCESS_TOKEN_KEY, accessToken, this.cookieOptions);
    response.cookie(
      COOKIES_REFRESH_TOKEN_KEY,
      refreshToken,
      this.cookieOptions,
    );
  }

  private async signToken<T>(userId: number, expiresIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn,
      },
    );
  }

  private async getIdAndUserIdFromRefreshToken(refreshToken: string) {
    const { sub: userId, refreshTokenId } = await this.jwtService.verifyAsync<
      Pick<ActiveUserData, 'sub'> & { refreshTokenId: string }
    >(refreshToken, {
      audience: this.jwtConfiguration.audience,
      issuer: this.jwtConfiguration.issuer,
      secret: this.jwtConfiguration.secret,
    });
    return { userId, refreshTokenId };
  }
}
