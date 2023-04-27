import { ApolloError } from '@apollo/client';
import { Post as TypePost } from '../../types/post.type';
import NoPosts from './components/NoPost/NoPosts';
import Post from './components/Post/Post';
import PostListPlaceholder from './components/PostListPlaceholder/PostListPlaceholder';

type privateProps = {
  posts: TypePost[];
  error?: ApolloError | undefined;
  isLoading?: boolean;
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
