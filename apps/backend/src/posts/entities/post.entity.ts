import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  text: string;

  @JoinTable()
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
