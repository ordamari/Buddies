import PostList from '@/features/post/components/PostList';
import { GET_POSTS } from '@/features/post/graphQL';
import { useQuery } from '@apollo/client';

function postsPage() {
  const postsHandler = useQuery(GET_POSTS);

  return (
    <div className="post-page page">
      <PostList
        error={postsHandler.error}
        isLoading={postsHandler.loading}
        posts={postsHandler.data ? postsHandler.data.posts : []}
      />
    </div>
  );
}

export default postsPage;
