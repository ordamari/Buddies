import { MOMENT_SHORT_FORMAT } from '@/features/post/constants';
import { User } from '@/features/user/types/user.type';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

type PrivateProps = {
  creator: User;
  createdAt: string;
};

function PostHeader({ creator, createdAt }: PrivateProps) {
  const { firstName, lastName, profileImageUrl, id } = creator;
  const creatorName = `${firstName} ${lastName}`;
  const momentDate = moment(createdAt);

  const getProfileImageSrc = () => {
    if (profileImageUrl) return profileImageUrl;
    return '/images/default-profile-image.jpg';
  };

  return (
    <Link href={`/users/${id}`} className="header">
      <Image
        width={40}
        height={40}
        src={getProfileImageSrc()}
        alt={creatorName}
      />
      <div className="info">
        <div className="name">{creatorName}</div>
        <div className="date">{momentDate.format(MOMENT_SHORT_FORMAT)}</div>
      </div>
    </Link>
  );
}
export default PostHeader;
