import useTranslation from '@/common/hooks/useTranslation';
import { Comment } from '@/features/comment/types/comment.type';

type PrivateProps = {
  comments: Comment[];
  onClick?: () => void;
};
function CommentsStatistics({ comments, onClick }: PrivateProps) {
  const t = useTranslation();

  const length = comments.length;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={handleClick} className="comments-statistics">
      {length} {t(`post.${length === 1 ? 'comment' : 'comments'}`)}
    </div>
  );
}
export default CommentsStatistics;
