import { User } from '@/features/user/types/user.type';
import MiniUser from './components/MiniUser/MiniUser';
import MiniUserListPlaceholder from './components/MiniUserListPlaceholder/MiniUserListPlaceholder';

type PrivateProps = {
  users: User[];
  isLoading?: boolean;
};
function MiniUserList({ users, isLoading }: PrivateProps) {
  if (isLoading) return <MiniUserListPlaceholder />;
  return (
    <ul className="mini-user-list">
      {users.map((user) => (
        <MiniUser key={user.id} {...user} />
      ))}
    </ul>
  );
}
export default MiniUserList;
