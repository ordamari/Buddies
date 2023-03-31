import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @description The comment of a post
 */
@ObjectType()
@Entity()
export class Comment {
  /**
   * @description The ID of the comment
   */
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  /**
   * @description The text in the comment
   */
  @Column()
  text: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
