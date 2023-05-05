import Icon from '@/common/components/Icon';
import useTranslation from '@/common/hooks/useTranslation';
import { ADD_COMMENT_TO_POST } from '@/features/post/graphQL';
import { useMutation } from '@apollo/client';

type PrivateProps = {
  postId: number;
};

function CommentAction({ postId }: PrivateProps) {
  const [addComment, addCommentHandler] = useMutation(ADD_COMMENT_TO_POST);
  const t = useTranslation();

  function handleAddComment() {
    addComment({
      variables: {
        postId,
        text: 'This is a comment',
      },
    });
  }

  const isAddCommentDisabled = addCommentHandler.loading;
  return (
    <button
      disabled={isAddCommentDisabled}
      onClick={handleAddComment}
      className="action-button"
    >
      <Icon icon="comment" />
      {t('post.comment')}
    </button>
  );
}
export default CommentAction;
