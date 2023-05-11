import { Post } from '@/features/post/types/post.type';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string;
  coverImageUrl: string;
  posts: Post[];
  friends: User[];
};
