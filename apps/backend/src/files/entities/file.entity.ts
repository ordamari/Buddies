import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class File {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  cloudinaryPublicId: string;

  @Column()
  resource_type: 'image' | 'video' | 'raw' | 'auto';

  @Column()
  secure_url: string;
}
