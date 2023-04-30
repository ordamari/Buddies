import CoverImage from './components/CoverImage/CoverImage';
import Friends from '../../../Friends/Friends';
import ProfileImage from './components/ProfileImage/ProfileImage';
import { User } from '@/features/user/types/user.type';
import AddFriend from '../../../AddFriend/AddFriend';
import MiniUserList from '../../../MiniUserList/MiniUserList';
import UserProfileHeaderPlaceholder from './components/UserProfileHeaderPlaceholder/UserProfileHeaderPlaceholder';

type PrivateProps = {
  user: User | null;
  isEditable?: boolean;
  isLoading?: boolean;
};

const MAX_FRIEND_IN_LIST = 8;

function UserProfileHeader({
  user,
  isEditable = false,
  isLoading,
}: PrivateProps) {
  if (isLoading || !user) return <UserProfileHeaderPlaceholder />;
  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <div className="user-profile-header">
      <div className="main-container">
        <CoverImage
          coverImageUrl={user.coverImageUrl}
          isEditable={isEditable}
        />
        <div className="flex align-end image-and-info-wrapper">
          <ProfileImage
            profileImageUrl={user.profileImageUrl}
            isEditable={isEditable}
          />
          <div className="wrapper w100 flex align-end justify-space-between">
            <div className="info">
              <div className="first-section flex column gap-small">
                <div className="full-name">{fullName}</div>

                <Friends friends={user.friends} />
                <MiniUserList
                  users={user.friends.slice(0, MAX_FRIEND_IN_LIST)}
                />
              </div>
            </div>
            <AddFriend userId={user.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfileHeader;
