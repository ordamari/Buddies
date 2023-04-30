import useTranslation from '@/common/hooks/useTranslation';
import { User as TypeUser } from '@/features/user/types/user.type';
import Image from 'next/image';
import Link from 'next/link';
import AddFriend from '../../../AddFriend/AddFriend';
import MiniUserList from '../../../MiniUserList/MiniUserList';

type privateProps = {
  key: number;
} & TypeUser;

const MAX_FRIEND_IN_LIST = 4;

function User({
  firstName,
  lastName,
  profileImageUrl,
  coverImageUrl,
  friends,
  id,
}: privateProps) {
  const fullName = `${firstName} ${lastName}`;
  const t = useTranslation();

  const getProfileImageSrc = () => {
    if (profileImageUrl) return profileImageUrl;
    return '/images/default-profile-image.jpg';
  };

  const getCoverImageSrc = () => {
    if (coverImageUrl) return coverImageUrl;
    return '/images/default-cover-photo.jpg';
  };

  return (
    <li className="user">
      <Image
        className="cover-image"
        src={getCoverImageSrc()}
        alt={fullName}
        width={456}
        height={132}
      />
      <div className="overlay" />
      <Image
        className="profile-image"
        src={getProfileImageSrc()}
        alt={fullName}
        width={100}
        height={100}
      />
      <div className="info">
        <div className="flex  justify-space-between w100 h100 align-end">
          <div className="first-section  flex column justify-center h100 gap-small">
            <Link href={`/users/${id}`} className="full-name">
              {fullName}
            </Link>
            <div className="flex gap-small align-center">
              <MiniUserList users={friends.slice(0, MAX_FRIEND_IN_LIST)} />
              {friends.length > MAX_FRIEND_IN_LIST && (
                // TODO: Link to user's friends page
                <Link className="other-friends" href="/users">
                  {t('general.and')} {friends.length - MAX_FRIEND_IN_LIST}{' '}
                  {t('general.others')}
                </Link>
              )}
            </div>
          </div>
          <AddFriend userId={id} />
        </div>
      </div>
    </li>
  );
}
export default User;
