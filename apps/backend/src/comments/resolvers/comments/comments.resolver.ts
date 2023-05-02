import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCommentInput } from 'src/comments/dto/create-comment.input';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsService } from 'src/comments/services/comments/comments.service';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';

@Resolver()
export class CommentsResolver {
  @Inject(CommentsService) private readonly commentsService!: CommentsService;

  @Mutation(() => Comment, { name: 'addCommentToPost' })
  async addCommentToPost(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
    @ActiveUser() activeUserData: ActiveUserData,
  ) {
    return await this.commentsService.addCommentToPost(
      createCommentInput.text,
      createCommentInput.postId,
      activeUserData.sub,
    );
  }
}
