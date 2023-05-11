import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/entities/comment.entity';
import { Reaction } from 'src/reactions/entities/reaction.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  text: string;

  @JoinTable()
  @OneToMany(() => Comment, (comment) => comment.post, { onDelete: 'CASCADE' })
  comments: Comment[];

  @JoinTable()
  @OneToMany(() => Reaction, (reaction) => reaction.post, {
    onDelete: 'CASCADE',
  })
  reactions: Reaction[];

  @JoinTable()
  @ManyToOne(() => User, (user) => user.posts)
  creator: User;
}
