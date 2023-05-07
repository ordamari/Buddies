import { User } from '@/features/user/types/user.type';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '../../../ProfileImage/ProfileImage';

type PrivateProps = User;
function MiniUser({ profileImageUrl, firstName, lastName, id }: PrivateProps) {
  const fullName = `${firstName} ${lastName}`;

  return (
    <li className="mini-user">
      <Link href={`users/${id}`}>
        <ProfileImage
          src={profileImageUrl}
          alt={fullName}
          width={30}
          height={30}
        />
      </Link>
    </li>
  );
}
export default MiniUser;
