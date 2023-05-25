import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/services/posts/posts.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/services/users/users.service';
import { Comment } from './entities/comment.entity';
import { CommentsService } from './services/comments/comments.service';
import { CommentsResolver } from './resolvers/comments/comments.resolver';
import { MediaFileService } from 'src/media-file/services/media-file/media-file.service';
import { MediaFile } from 'src/media-file/entities/media-file.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, Post, User, MediaFile]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [
    CommentsService,
    PostsService,
    UsersService,
    CloudinaryService,
    MediaFileService,
    CommentsResolver,
  ],
})
export class CommentsModule {}
