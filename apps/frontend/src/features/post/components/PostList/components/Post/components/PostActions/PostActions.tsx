import {
  ADD_COMMENT_TO_POST,
  ADD_REACTION_TO_POST,
} from '@/features/post/graphQL';
import { useMutation } from '@apollo/client';

type PrivateProps = {
  postId: number;
};

function PostActions({ postId }: PrivateProps) {
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
        type: 'LOVE',
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
        className="btn btn--primary"
      >
        Reaction
      </button>
      <button
        disabled={isAddCommentDisabled}
        onClick={handleAddComment}
        className="btn btn--primary"
      >
        comment
      </button>
    </div>
  );
}

export default PostActions;
