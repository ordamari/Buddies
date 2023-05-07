import { Comment as CommentType } from '@/features/comment/types/comment.type';
import Comment from './components/Comment/Comment';

type PrivateProps = {
  comments: CommentType[];
};
function CommentList({ comments }: PrivateProps) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
  );
}
export default CommentList;
