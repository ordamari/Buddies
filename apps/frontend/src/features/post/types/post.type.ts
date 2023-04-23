import { Comment } from './comment.type';

export type Post = {
  id: number;
  text: string;
  comments: Comment[];
};
