import useTranslation from '@/common/hooks/useTranslation';
import { User as TypeUser } from '@/features/user/types/user.type';
import Image from 'next/image';
import Link from 'next/link';

type privateProps = {
  key: number;
} & TypeUser;

function User({
  firstName,
  lastName,
  profileImageUrl,
  friends,
  id,
}: privateProps) {
  const fullName = `${firstName} ${lastName}`;
  const t = useTranslation();

  const getSrc = () => {
    if (profileImageUrl) return profileImageUrl;
    return '/images/default-profile-image.jpg';
  };

  return (
    <li className="user-container">
      <Link href={`/users/${id}`} className="user">
        <Image src={getSrc()} alt={fullName} width={100} height={100} />
        <div className="info">
          <span className="full-name">{fullName}</span>
          <span className="friends-count">
            {friends.length === 0
              ? t('user.noFriends')
              : `${friends.length} ${t('user.friends')}`}
          </span>
        </div>
      </Link>
    </li>
  );
}
export default User;
