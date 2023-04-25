import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsService } from './services/posts/posts.service';
import { PostsResolver } from './resolvers/posts/posts.resolver';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentService } from 'src/comments/services/comment/comment.service';
import { User } from 'src/users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { UsersService } from 'src/users/services/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Comment, User]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [
    PostsResolver,
    PostsService,
    CommentService,
    CloudinaryService,
    UsersService,
  ],
})
export class PostsModule {}
