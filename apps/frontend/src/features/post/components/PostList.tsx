import { ApolloError } from '@apollo/client';
import { Post as TypePost } from '../types/post.type';
import NoPosts from './NoPosts';
import Post from './Post';
import PostListPlaceholder from './PostListPlaceholder';

type privateProps = {
  posts: TypePost[];
  error: ApolloError | undefined;
  isLoading: boolean;
};

function PostList({ posts, error, isLoading }: privateProps) {
  if (isLoading) return <PostListPlaceholder />;
  if (error) return <div className="error">{error.message}</div>;
  if (posts.length === 0) return <NoPosts />;
  return (
    <ul>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </ul>
  );
}

export default PostList;
