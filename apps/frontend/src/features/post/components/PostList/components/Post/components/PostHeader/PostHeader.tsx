import { getTimeAgo } from '@/common/assets/translations/util';
import { MOMENT_SHORT_FORMAT } from '@/common/constants';
import ProfileImage from '@/features/user/components/ProfileImage/ProfileImage';
import { User } from '@/features/user/types/user.type';
import moment from 'moment';
import Link from 'next/link';

type PrivateProps = {
  creator: User;
  createdAt: string;
};

function PostHeader({ creator, createdAt }: PrivateProps) {
  const { firstName, lastName, profileImageUrl, id } = creator;
  const creatorName = `${firstName} ${lastName}`;

  return (
    <Link href={`/users/${id}`} className="header">
      <ProfileImage
        width={40}
        height={40}
        src={profileImageUrl}
        alt={creatorName}
      />
      <div className="info">
        <div className="name">{creatorName}</div>
        <div className="date">{getTimeAgo(new Date(createdAt))}</div>
      </div>
    </Link>
  );
}
export default PostHeader;
