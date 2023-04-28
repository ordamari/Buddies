import { ApolloError } from '@apollo/client';
import { User as TypeUser } from '../../types/user.type';
import NoUsers from './components/NoUser/NoUsers';
import User from './components/User/User';
import UserListPlaceholder from './components/UserListPlaceholder/UserListPlaceholder';

type privateProps = {
  users: TypeUser[];
  error?: ApolloError | undefined;
  isLoading?: boolean;
};

function UserList({ users, error, isLoading }: privateProps) {
  if (isLoading) return <UserListPlaceholder />;
  if (error) return <div className="error">{error.message}</div>;
  if (users.length === 0) return <NoUsers />;
  return (
    <ul className="user-list">
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </ul>
  );
}
export default UserList;
