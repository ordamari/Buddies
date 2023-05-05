import { Inject, ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { CreateReactionInput } from 'src/reactions/dto/create-reaction.input';
import { EditReactionTypeInput } from 'src/reactions/dto/edit-reaction-type.input';
import { Reaction } from 'src/reactions/entities/reaction.entity';
import { ReactionsService } from 'src/reactions/services/reactions/reactions.service';

@Resolver()
export class ReactionsResolver {
  @Inject(ReactionsService)
  private readonly reactionsService!: ReactionsService;

  @Mutation(() => Reaction, { name: 'editReactionType' })
  async editReactionType(
    @Args('editReactionTypeInput') editReactionTypeInput: EditReactionTypeInput,
    @ActiveUser() activeUserData: ActiveUserData,
  ) {
    return await this.reactionsService.editType(
      activeUserData.sub,
      editReactionTypeInput.id,
      editReactionTypeInput.type,
    );
  }

  @Mutation(() => Reaction, { name: 'removeReaction' })
  async removeReactionType(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @ActiveUser() activeUserData: ActiveUserData,
  ) {
    return await this.reactionsService.remove(activeUserData.sub, id);
  }

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
