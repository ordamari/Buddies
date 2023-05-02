import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { User } from './entities/user.entity';
import { UsersService } from './services/users/users.service';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { UsersResolver } from './resolvers/users/users.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [UsersService, CloudinaryService, UsersResolver],
})
export class UsersModule {}
