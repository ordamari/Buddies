import { Field, ID, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @MinLength(3)
  text: string;

  @Field(() => ID)
  postId: number;
}
