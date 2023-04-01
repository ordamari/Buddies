import { HashingService } from './services/hashing/hashing.service';
import { BcryptService } from './services/bcrypt/bcrypt.service';
import { Module } from '@nestjs/common';
import { AuthenticationResolver } from './resolvers/authentication/authentication.resolver';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UsersService } from 'src/users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    AuthenticationResolver,
    AuthenticationService,
    UsersService,
  ],
})
export class IamModule {}
