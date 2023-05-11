import AuthGuard from '@/features/authentication/guards/auth.guard';
import UserProfile from '@/features/user/components/UserProfile/UserProfile';
import { GET_USER } from '@/features/user/graphQL';
import { User } from '@/features/user/types/user.type';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const userHandler = useQuery(GET_USER, { variables: { id } });
  const user = userHandler.data?.user as User;
  return (
    <AuthGuard>
      <div className="user-page full">
        <UserProfile
          isLoading={userHandler.loading}
          error={userHandler.error}
          user={user}
        />
      </div>
    </AuthGuard>
  );
}
export default UserPage;
