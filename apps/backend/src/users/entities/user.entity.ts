import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @description The user entity class
 */
@Entity()
@ObjectType()
export class User {
  /**
   * @description The ID of the user
   */
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  /**
   * @description The email of the user
   */
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
