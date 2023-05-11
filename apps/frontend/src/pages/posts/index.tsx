import useArray from '@/common/hooks/useArray';
import AuthGuard from '@/features/authentication/guards/auth.guard';
import PostForm from '@/features/post/components/PostForm/PostForm';
import PostList from '@/features/post/components/PostList/PostList';
import { GET_POSTS } from '@/features/post/graphQL';
import { Post } from '@/features/post/types/post.type';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

function postsPage() {
  const postsHandler = useQuery(GET_POSTS);
  const [posts, postsActions] = useArray<Post>();
  useEffect(() => {
    if (postsHandler.data) {
      postsActions.set(postsHandler.data.posts);
    }
  }, [postsHandler.data]);

  const sortedPostsByDates = postsActions.getSortedByDates('createdAt', true);
  return (
    <AuthGuard>
      <div className="post-page">
        <PostForm afterSubmit={postsActions.add} />
        <PostList
          error={postsHandler.error}
          isLoading={postsHandler.loading}
          posts={sortedPostsByDates}
        />
      </div>
    </AuthGuard>
  );
}

export default postsPage;
