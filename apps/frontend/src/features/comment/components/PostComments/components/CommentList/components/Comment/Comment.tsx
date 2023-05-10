import { MOMENT_SHORT_FORMAT } from '@/common/constants';
import { Comment } from '@/features/comment/types/comment.type';
import ProfileImage from '@/features/user/components/ProfileImage/ProfileImage';
import moment from 'moment';
import Link from 'next/link';
import CommentHeader from './components/CommentHeader/CommentHeader';

type PrivateProps = Comment;

function Comment({ text, creator, createdAt }: PrivateProps) {
  const fullName = `${creator.firstName} ${creator.lastName}`;
  return (
    <li className="comment">
      <Link href={`users/${creator.id}`}>
        <ProfileImage
          src={creator.profileImageUrl}
          alt={fullName}
          width={40}
          height={40}
        />
      </Link>
      <div className="info">
        <CommentHeader
          createdAt={createdAt}
          creator={creator}
          fullName={fullName}
        />
        <div className="text">{text}</div>
      </div>
    </li>
  );
}
export default Comment;
