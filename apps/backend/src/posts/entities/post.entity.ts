import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
/**
 * @description The post entity class
 */
@Entity()
@ObjectType()
export class Post {
  /**
   * @description The ID of the post
   */
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  /**
   * @description The text in the post
   */
  @Column()
  text: string;

  /**
   * @description The comments of the post
   */
  @JoinTable()
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
