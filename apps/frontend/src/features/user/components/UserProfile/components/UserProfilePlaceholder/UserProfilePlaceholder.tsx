import PostList from '@/features/post/components/PostList/PostList';
import UserProfileHeader from '../UserProfileHeader/UserProfileHeader';

function UserProfilePlaceholder() {
  return (
    <>
      <UserProfileHeader user={null} isLoading={true} />;
      <div className="main-container">
        <PostList posts={[]} isLoading={true} />
      </div>
    </>
  );
}
export default UserProfilePlaceholder;
