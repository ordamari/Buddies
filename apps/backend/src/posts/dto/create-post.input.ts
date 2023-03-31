import { InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
/**
 * @description Create post data
 */
@InputType()
export class CreatePostInput {
  /**
   * @description The text in the post
   */
  @MinLength(3)
  text: string;
}
