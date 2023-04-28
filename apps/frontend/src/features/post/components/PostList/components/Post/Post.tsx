import { MOMENT_SHORT_FORMAT } from '@/features/post/constants';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { Post as TypePost } from '../../../../types/post.type';

type privateProps = {
  key: number;
} & TypePost;
function Post({ text, creator, createdAt }: privateProps) {
  const { firstName, lastName, profileImageUrl, id } = creator;
  const creatorName = `${firstName} ${lastName}`;
  const momentDate = moment(createdAt);
  return (
    <li className="post">
      <Link href={`/users/${id}`} className="header">
        <Image width={40} height={40} src={profileImageUrl} alt={creatorName} />
        <div className="info">
          <div className="name">{creatorName}</div>
          <div className="date">{momentDate.format(MOMENT_SHORT_FORMAT)}</div>
        </div>
      </Link>
      <h2 className="post-title">{text}</h2>
    </li>
  );
}

export default Post;
