import { registerEnumType } from '@nestjs/graphql';

export enum ReactionType {
  LIKE = 'LIKE',
  LOVE = 'LOVE',
  FUNNY = 'FUNNY',
  INTERESTING = 'INTERESTING',
  SURPRISED = 'SURPRISED',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
}

registerEnumType(ReactionType, { name: 'ReactionType' });
