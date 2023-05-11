import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsService } from './services/posts/posts.service';
import { PostsResolver } from './resolvers/posts/posts.resolver';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsService } from 'src/comments/services/comments/comments.service';
import { User } from 'src/users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import cloudinaryConfig from 'src/cloudinary/config/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/services/cloudinary/cloudinary.service';
import { UsersService } from 'src/users/services/users/users.service';
import { Reaction } from 'src/reactions/entities/reaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Comment, User, Reaction]),
    ConfigModule.forFeature(cloudinaryConfig),
  ],
  providers: [
    PostsResolver,
    PostsService,
    CommentsService,
    CloudinaryService,
    UsersService,
  ],
})
export class PostsModule {}
