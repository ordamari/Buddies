import { User } from '@/features/user/types/user.type';

export type Comment = {
  id: number;
  text: string;
  creator: User;
  createdAt: string;
};
