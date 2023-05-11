import { Field, ID, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { ReactionType } from '../enums/reaction-types.enum';

@InputType()
export class CreateReactionInput {
  @MinLength(3)
  type: ReactionType;

  @Field(() => ID)
  postId: number;
}
