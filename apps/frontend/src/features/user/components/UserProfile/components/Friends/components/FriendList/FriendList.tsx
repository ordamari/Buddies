import useTranslation from '@/common/hooks/useTranslation';
import { User } from '@/features/user/types/user.type';

type PrivateProps = {
  friends: User[];
};
function FriendList({ friends }: PrivateProps) {
  const t = useTranslation();
  return (
    <div className="friends-list">
      <div className="number">
        {friends.length} {t('user.friends')}
      </div>
    </div>
  );
}
export default FriendList;
