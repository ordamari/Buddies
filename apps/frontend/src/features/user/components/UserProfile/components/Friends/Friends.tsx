import { User } from '@/features/user/types/user.type';
import FriendList from './components/FriendList/FriendList';
import NoFriends from './components/NoFriends/NoFriends';

// type PrivateProps = {
//   friends: User[];
// };
function Friends() {
  const friends = [] as User[];

  return (
    <div className="friends">
      {friends.length === 0 ? <NoFriends /> : <FriendList friends={friends} />}
    </div>
  );
}
export default Friends;
