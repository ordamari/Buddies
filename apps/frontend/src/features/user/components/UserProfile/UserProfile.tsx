import { User } from '../../types/user.type';
import CoverImage from './components/CoverImage/CoverImage';
import FriendList from './components/Friends/components/FriendList/FriendList';
import Friends from './components/Friends/Friends';
import ProfileImage from './components/ProfileImage/ProfileImage';

type PrivateProps = {
  user: User;
  isEditable: boolean;
};

function UserProfile({ user, isEditable }: PrivateProps) {
  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <div className="user-profile">
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
          <div className="info">
            <div className="first-section">
              <div className="full-name">{fullName}</div>
              <Friends />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
