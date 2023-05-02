import { User } from '@/features/user/types/user.type';
import { reactionType } from '../enums/reactionType.enum';

export type Reaction = {
  id: number;
  creator: User;
  type: reactionType;
};
