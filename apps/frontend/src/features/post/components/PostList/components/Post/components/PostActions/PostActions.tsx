import { ArrayActions } from '@/common/hooks/useArray';
import { Comment } from '@/features/post/types/comment.type';
import { Reaction } from '@/features/post/types/reaction.type';
import CommentAction from './components/CommentAction/CommentAction';
import LikeAction from './components/LikeAction/LikeAction';

type PrivateProps = {
  postId: number;
  loggedInUserReaction: Reaction | null;
  commentsActions: ArrayActions<Comment>;
  reactionsActions: ArrayActions<Reaction>;
};

function PostActions({
  postId,
  loggedInUserReaction,
  reactionsActions,
  commentsActions,
}: PrivateProps) {
  return (
    <div className="actions flex">
      <LikeAction
        reactionsActions={reactionsActions}
        postId={postId}
        loggedInUserReaction={loggedInUserReaction}
      />
      <CommentAction postId={postId} />
    </div>
  );
}

export default PostActions;
