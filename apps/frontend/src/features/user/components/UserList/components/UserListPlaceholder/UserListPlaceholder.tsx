import UserPlaceholder from './components/UserPlaceholder';

type PrivateProps = {
  length?: number;
};

function UserListPlaceholder({ length = 8 }: PrivateProps) {
  return (
    <ul>
      {Array.from({ length }, (_, i) => (
        <UserPlaceholder key={i} />
      ))}
    </ul>
  );
}
export default UserListPlaceholder;
