import AuthGuard from '@/features/authentication/guards/auth.guard';
import UserProfile from '@/features/user/components/UserProfile/UserProfile';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const user = useSelector((state: RootState) => state.loggedInUser);
  return (
    <AuthGuard>
      <div className="profile-page full">
        <UserProfile user={user} />
      </div>
    </AuthGuard>
  );
}
export default ProfilePage;
