import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@ObjectType()
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  text: string;

  @JoinTable()
  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @JoinTable()
  @ManyToOne(() => User, (user) => user.comments)
  creator: User;
}
