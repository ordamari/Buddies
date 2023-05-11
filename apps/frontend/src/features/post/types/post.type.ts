import { User } from '@/features/user/types/user.type';
import { Comment } from '../../comment/types/comment.type';
import { Reaction } from '../../reaction/types/reaction.type';

export type Post = {
  id: number;
  text: string;
  comments: Comment[];
  reactions: Reaction[];
  createdAt: string;
  creator: User;
};
