import { ReactionType } from '@/features/reaction/enums/reactionType.enum';
import { User } from '@/features/user/types/user.type';

export type Reaction = {
  id: number;
  creator: User;
  type: ReactionType;
};
