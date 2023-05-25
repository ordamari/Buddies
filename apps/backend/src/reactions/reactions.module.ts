import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { MediaFile } from 'src/media-file/entities/media-file.entity';
import { MediaFileService } from 'src/media-file/services/media-file/media-file.service';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/services/posts/posts.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';
import { Reaction } from './entities/reaction.entity';
import { ReactionsResolver } from './resolvers/reactions/reactions.resolver';
import { ReactionsService } from './services/reactions/reactions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reaction, Post, User, MediaFile]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [
    ReactionsResolver,
    ReactionsService,
    CloudinaryService,
    UsersService,
    PostsService,
    MediaFileService,
  ],
})
export class ReactionsModule {}
