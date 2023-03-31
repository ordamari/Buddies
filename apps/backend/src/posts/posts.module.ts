import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsService } from './services/posts/posts.service';
import { PostsResolver } from './resolvers/posts/posts.resolver';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentService } from 'src/comments/services/comment/comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  providers: [PostsResolver, PostsService, CommentService],
})
export class PostsModule {}
