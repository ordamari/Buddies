import { ArrayActions } from '@/common/hooks/useArray';
import { Comment } from '@/features/comment/types/comment.type';
import PostLikeAction from '@/features/reaction/components/PostLikeAction/PostLikeAction';
import { Reaction } from '@/features/reaction/types/reaction.type';
import CommentAction from './components/CommentAction/CommentAction';

type PrivateProps = {
  postId: number;
  loggedInUserReaction: Reaction | null;
  commentsActions: ArrayActions<Comment>;
  reactionsActions: ArrayActions<Reaction>;
  showComments: () => void;
};

function PostActions({
  postId,
  loggedInUserReaction,
  reactionsActions,
  showComments,
}: PrivateProps) {
  return (
    <div className="actions flex">
      <PostLikeAction
        reactionsActions={reactionsActions}
        postId={postId}
        loggedInUserReaction={loggedInUserReaction}
      />
      <CommentAction showComments={showComments} />
    </div>
  );
}

export default PostActions;
