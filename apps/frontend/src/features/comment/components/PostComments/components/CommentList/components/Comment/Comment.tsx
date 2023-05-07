import { MOMENT_SHORT_FORMAT } from '@/common/constants';
import { Comment } from '@/features/comment/types/comment.type';
import ProfileImage from '@/features/user/components/ProfileImage/ProfileImage';
import moment from 'moment';

type PrivateProps = Comment;

function Comment({ text, creator, createdAt }: PrivateProps) {
  const fullName = `${creator.firstName} ${creator.lastName}`;
  return (
    <li className="comment">
      <ProfileImage
        src={creator.profileImageUrl}
        alt={fullName}
        width={40}
        height={40}
      />
      <div className="info">
        <div className="comment-header">
          <span className="name">{fullName}</span>
          <div className="date">
            {moment(createdAt).format(MOMENT_SHORT_FORMAT)}
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
}
export default Comment;
