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
  const momentDate = moment(createdAt);

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
        <div className="date">{momentDate.format(MOMENT_SHORT_FORMAT)}</div>
      </div>
    </Link>
  );
}
export default PostHeader;
