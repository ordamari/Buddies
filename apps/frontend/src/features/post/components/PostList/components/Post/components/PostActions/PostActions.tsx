import Icon from '@/common/components/Icon';
import useTranslation from '@/common/hooks/useTranslation';
import {
  ADD_COMMENT_TO_POST,
  ADD_REACTION_TO_POST,
} from '@/features/post/graphQL';
import { useMutation } from '@apollo/client';

type PrivateProps = {
  postId: number;
};

function PostActions({ postId }: PrivateProps) {
  const t = useTranslation();
  const [addComment, addCommentHandler] = useMutation(ADD_COMMENT_TO_POST);
  const [addReaction, addReactionHandler] = useMutation(ADD_REACTION_TO_POST);

  function handleAddComment() {
    addComment({
      variables: {
        postId,
        text: 'This is a comment',
      },
    });
  }

  function handleAddReaction() {
    addReaction({
      variables: {
        postId,
        type: 'SAD',
      },
    });
  }

  const isAddCommentDisabled = addCommentHandler.loading;
  const isAddReactionDisabled = addReactionHandler.loading;
  return (
    <div className="actions">
      <button
        onClick={handleAddReaction}
        disabled={isAddReactionDisabled}
        className="action-button"
      >
        <Icon icon="like" />
        {t('post.like')}
      </button>
      <button
        disabled={isAddCommentDisabled}
        onClick={handleAddComment}
        className="action-button"
      >
        <Icon icon="comment" />
        {t('post.comment')}
      </button>
    </div>
  );
}

export default PostActions;
