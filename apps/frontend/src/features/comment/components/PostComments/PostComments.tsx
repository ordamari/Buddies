import { Comment } from '@/features/comment/types/comment.type';
import CommentTextarea from './components/CommentTextarea/CommentTextarea';
import CommentList from './components/CommentList/CommentList';
import { ArrayActions } from '@/common/hooks/useArray';

type PrivateProps = {
  comments: Comment[];
  commentTextareaRef: React.RefObject<HTMLTextAreaElement>;
  postId: number;
  commentsActions: ArrayActions<Comment>;
};
function PostComments({
  commentTextareaRef,
  commentsActions,
  postId,
}: PrivateProps) {
  const sortedCommentsByDates = commentsActions.getSortedByDates(
    'createdAt',
    false,
  );
  return (
    <div className="post-comments">
      <CommentTextarea
        commentsActions={commentsActions}
        postId={postId}
        textareaRef={commentTextareaRef}
      />
      <CommentList comments={sortedCommentsByDates} />
    </div>
  );
}
export default PostComments;
