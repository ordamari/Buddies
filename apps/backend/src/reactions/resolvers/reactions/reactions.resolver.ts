import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { CreateReactionInput } from 'src/reactions/dto/create-reaction.input';
import { Reaction } from 'src/reactions/entities/reaction.entity';
import { ReactionsService } from 'src/reactions/services/reactions/reactions.service';

@Resolver()
export class ReactionsResolver {
  @Inject(ReactionsService)
  private readonly reactionsService!: ReactionsService;

  @Mutation(() => Reaction, { name: 'addReactionToPost' })
  async addReactionToPost(
    @Args('createReactionInput') createReactionInput: CreateReactionInput,
    @ActiveUser() activeUserData: ActiveUserData,
  ) {
    return await this.reactionsService.addReactionToPost(
      createReactionInput.type,
      createReactionInput.postId,
      activeUserData.sub,
    );
  }
}
