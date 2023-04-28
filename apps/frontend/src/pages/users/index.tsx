import AuthGuard from '@/features/authentication/guards/auth.guard';
import UserList from '@/features/user/components/UserList/UserList';
import { GET_USERS } from '@/features/user/graphQL';
import { useQuery } from '@apollo/client';

function UsersPage() {
  const usersHandler = useQuery(GET_USERS, { variables: { query: '' } });

  return (
    <AuthGuard>
      <div className="user-page">
        <UserList users={usersHandler.data ? usersHandler.data.users : []} />
      </div>
    </AuthGuard>
  );
}
export default UsersPage;
