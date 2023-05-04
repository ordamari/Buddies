import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReactionType } from '../enums/reaction-types.enum';

@Index(['creator', 'post'], { unique: true })
@ObjectType()
@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  type: ReactionType;

  @JoinTable()
  @ManyToOne(() => Post, (post) => post.reactions)
  post: Post;

  @JoinTable()
  @ManyToOne(() => User, (user) => user.reactions)
  creator: User;
}
