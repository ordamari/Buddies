import useTranslation from '@/common/hooks/useTranslation';
import { Comment } from '@/features/comment/types/comment.type';
import Link from 'next/link';

type PrivateProps = {
  comments: Comment[];
  postId: number;
};
function CommentsStatistics({ comments, postId }: PrivateProps) {
  const t = useTranslation();

  const length = comments.length;
  return (
    <Link href={`posts/${postId}`} className="comments-statistics">
      {length} {t(`post.${length === 1 ? 'comment' : 'comments'}`)}
    </Link>
  );
}
export default CommentsStatistics;
