import { User } from '@/features/user/types/user.type';
import { Comment } from './comment.type';

export type Post = {
  id: number;
  text: string;
  comments: Comment[];
  createdAt: string;
  creator: User;
};
