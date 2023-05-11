import { getTimeAgo } from '@/common/assets/translations/util';
import { User } from '@/features/user/types/user.type';
import Link from 'next/link';

type PrivateProps = {
  creator: User;
  fullName: string;
  createdAt: string;
};
function CommentHeader({ creator, fullName, createdAt }: PrivateProps) {
  return (
    <div className="comment-header">
      <Link href={`users/${creator.id}`} className="name">
        {fullName}
      </Link>
      <div className="time-ago">{getTimeAgo(new Date(createdAt))}</div>
    </div>
  );
}
export default CommentHeader;
