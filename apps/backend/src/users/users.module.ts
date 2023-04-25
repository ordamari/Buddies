import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { User } from './entities/user.entity';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { ConfigModule } from '@nestjs/config';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { UsersResolver } from './resolvers/users/users.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [UsersService, CloudinaryService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}
