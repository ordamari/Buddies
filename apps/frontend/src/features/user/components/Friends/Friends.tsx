import useTranslation from '@/common/hooks/useTranslation';
import { User } from '@/features/user/types/user.type';
import NoFriends from './components/NoFriends/NoFriends';

type PrivateProps = {
  friends: User[];
};
function Friends({ friends }: PrivateProps) {
  const t = useTranslation();
  if (!friends) return <NoFriends />;
  return (
    <div className="friends-number">
      {' '}
      {friends.length} {t('user.friends')}
    </div>
  );
}
export default Friends;
