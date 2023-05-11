import useTranslation from '@/common/hooks/useTranslation';
import Button from '@/layout/ui/Button';
import { RootState } from '@/store/store';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { ADD_FRIEND } from '../../graphQL';

type PrivateProps = {
  userId: number;
};

function AddFriend({ userId }: PrivateProps) {
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser);
  const t = useTranslation();

  const [addFriend, addFriendHandler] = useMutation(ADD_FRIEND);
  const addFriendDisabled = addFriendHandler.loading;

  function handleAddFriend(ev: MouseEvent) {
    ev.stopPropagation();
    addFriend({ variables: { friendId: userId } });
  }

  if (loggedInUser.id === userId)
    return (
      <Button href="/users" className="find-friends primary small">
        {t('user.find-friends')}
      </Button>
    );

  if (loggedInUser.friends.some((friend) => friend.id === userId))
    return <span className="already-friend">{t('user.already-friend')}</span>;

  return (
    <Button
      disabled={addFriendDisabled}
      className="add-friend primary small"
      onClick={handleAddFriend}
    >
      {t('user.add-friend')}
    </Button>
  );
}

export default AddFriend;
