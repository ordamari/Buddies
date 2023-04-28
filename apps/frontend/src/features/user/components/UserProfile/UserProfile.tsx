import PostList from '@/features/post/components/PostList/PostList';
import { Post } from '@/features/post/types/post.type';
import { RootState } from '@/store/store';
import { ApolloError } from '@apollo/client';
import { useSelector } from 'react-redux';
import { User } from '../../types/user.type';
import UserProfileHeader from './components/UserProfileHeader/UserProfileHeader';
import UserProfilePlaceholder from './components/UserProfilePlaceholder/UserProfilePlaceholder';

type PrivateProps = {
  user: User;
  error?: ApolloError | undefined;
  isLoading?: boolean;
};

function UserProfile({ user, error, isLoading }: PrivateProps) {
  if (isLoading || !user) return <UserProfilePlaceholder />;
  if (error) return <div>Something went wrong</div>;
  const loggedInUserId = useSelector(
    (state: RootState) => state.loggedInUser.id,
  );
  return (
    <>
      <UserProfileHeader user={user} isEditable={loggedInUserId === user.id} />
      <div className="main-container">
        <PostList
          posts={user.posts.map((post) => ({ ...post, creator: user } as Post))}
        />
      </div>
    </>
  );
}

export default UserProfile;
