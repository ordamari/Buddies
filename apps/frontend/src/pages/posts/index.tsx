import AuthGuard from '@/features/authentication/guards/auth.guard';
import PostList from '@/features/post/components/PostList/PostList';
import { GET_POSTS } from '@/features/post/graphQL';
import { useQuery } from '@apollo/client';

function postsPage() {
  const postsHandler = useQuery(GET_POSTS);

  return (
    <AuthGuard>
      <div className="post-page">
        <PostList
          error={postsHandler.error}
          isLoading={postsHandler.loading}
          posts={postsHandler.data ? postsHandler.data.posts : []}
        />
      </div>
    </AuthGuard>
  );
}

export default postsPage;
