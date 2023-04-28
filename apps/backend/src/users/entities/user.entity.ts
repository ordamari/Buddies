import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * @description The user entity class
 */
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  googleId: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profileImageUrl: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  coverImageUrl: string;

  @JoinTable()
  @ManyToMany(() => User, (user) => user.friends, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  friends: User[];

  @JoinTable()
  @OneToMany(() => Post, (post) => post.creator, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  posts: Post[];
}
