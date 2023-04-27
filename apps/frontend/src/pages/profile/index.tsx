import AuthGuard from '@/features/authentication/guards/auth.guard';
import PostList from '@/features/post/components/PostList/PostList';
import UserProfile from '@/features/user/components/UserProfile/UserProfile';
import { User } from '@/features/user/types/user.type';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const user = useSelector((state: RootState) => state.loggedInUser);
  return (
    <AuthGuard>
      <div className="profile-page full">
        <UserProfile user={user as User} isEditable={true} />
        <div className="main-container">
          <PostList posts={user.posts} />
        </div>
      </div>
    </AuthGuard>
  );
}
export default ProfilePage;
