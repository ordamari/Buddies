import { UserInputError } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsService } from 'src/posts/services/posts/posts.service';
import { Reaction } from 'src/reactions/entities/reaction.entity';
import { ReactionType } from 'src/reactions/enums/reaction-types.enum';
import { UsersService } from 'src/users/services/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class ReactionsService {
  @InjectRepository(Reaction)
  private readonly reactionRepository!: Repository<Reaction>;

  @Inject(UsersService)
  private readonly usersService!: UsersService;

  @Inject(PostsService)
  private readonly postsService!: PostsService;

  async addReactionToPost(
    type: ReactionType,
    postId: number,
    creatorId: number,
  ) {
    const creator = await this.usersService.findById(creatorId);
    if (!creator) throw new UserInputError('User not found');
    const post = await this.postsService.findOne(postId);
    if (!post) throw new UserInputError('Post not found');
    const reaction = this.reactionRepository.create({
      type,
      post,
      creator,
    });
    return this.reactionRepository.save(reaction);
  }
}
