import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { PostsService } from 'src/posts/services/posts/posts.service';
import { UsersService } from 'src/users/services/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  @InjectRepository(Comment)
  private readonly commentRepository!: Repository<Comment>;

  @Inject(UsersService)
  private readonly usersService!: UsersService;

  @Inject(PostsService)
  private readonly postsService!: PostsService;

  async addCommentToPost(text: string, postId: number, creatorId: number) {
    const creator = await this.usersService.findById(creatorId);
    if (!creator) throw new UserInputError('User not found');
    const post = await this.postsService.findOne(postId);
    if (!post) throw new UserInputError('Post not found');
    const comment = this.commentRepository.create({
      text,
      post,
      creator,
    });
    return this.commentRepository.save(comment);
  }
}
