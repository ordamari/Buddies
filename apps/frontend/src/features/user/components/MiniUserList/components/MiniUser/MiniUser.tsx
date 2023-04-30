import { User } from '@/features/user/types/user.type';
import Image from 'next/image';
import Link from 'next/link';

type PrivateProps = User;
function MiniUser({ profileImageUrl, firstName, lastName, id }: PrivateProps) {
  const getSrc = () => {
    if (profileImageUrl) return profileImageUrl;
    return '/images/default-profile-image.jpg';
  };

  const fullName = `${firstName} ${lastName}`;

  return (
    <li className="mini-user">
      <Link href={`users/${id}`}>
        <Image src={getSrc()} alt={fullName} width={30} height={30} />
      </Link>
    </li>
  );
}
export default MiniUser;
