import { HashingService } from './services/hashing/hashing.service';
import { BcryptService } from './services/bcrypt/bcrypt.service';
import { Module } from '@nestjs/common';
import { AuthenticationResolver } from './resolvers/authentication/authentication.resolver';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UsersService } from 'src/users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { AccessTokenGuard } from './guards/access-token/access-token.guard';
import { RefreshTokenIdsStorage } from './storage/refresh-token-ids.storage/refresh-token-ids.storage';
import { RedisService } from 'src/redis/services/redis/redis.service';
import { GoogleAuthenticationService } from './services/google-authentication/google-authentication.service';
import { GoogleAuthenticationResolver } from './resolvers/google-authentication/google-authentication.resolver';
import redisConfig from 'src/redis/config/redis.config';
import googleConfig from './config/google.config';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { MediaFileService } from 'src/media-file/services/media-file/media-file.service';
import { MediaFile } from 'src/media-file/entities/media-file.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, MediaFile]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(redisConfig),
    ConfigModule.forFeature(googleConfig),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    AuthenticationResolver,
    AccessTokenGuard,
    RefreshTokenIdsStorage,
    AuthenticationService,
    MediaFileService,
    UsersService,
    RedisService,
    GoogleAuthenticationService,
    GoogleAuthenticationResolver,
    CloudinaryService,
  ],
})
export class IamModule {}
