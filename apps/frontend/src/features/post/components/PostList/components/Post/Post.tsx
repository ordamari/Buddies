import Condition from '@/common/components/Condition';
import useArray from '@/common/hooks/useArray';
import { useToggle } from '@/common/hooks/useToggle';
import PostComments from '@/features/comment/components/PostComments/PostComments';
import { Comment } from '@/features/comment/types/comment.type';
import { Reaction } from '@/features/reaction/types/reaction.type';
import { RootState } from '@/store/store';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Post as TypePost } from '../../../../types/post.type';
import PostActions from './components/PostActions/PostActions';
import PostContent from './components/PostContent/PostContent';
import PostHeader from './components/PostHeader/PostHeader';
import PostStatistics from './components/PostStatistics/PostStatistics';

type privateProps = {
  key: number;
} & TypePost;
function Post({
  text,
  creator,
  createdAt,
  comments: propsComments,
  reactions: propsReactions,
  id,
}: privateProps) {
  const [comments, commentsActions] = useArray<Comment>();
  const [reactions, reactionsActions] = useArray<Reaction>();
  const [isShowComments, toggleIsShowComments] = useToggle(false);
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const loggedInUserId = useSelector(
    (state: RootState) => state.loggedInUser.id,
  );

  const getLoggedInUserReaction = (): Reaction | null => {
    if (!loggedInUserId || !reactions.length) return null;
    const loggedInUserReaction = reactions.find(
      (reaction) => reaction.creator.id === loggedInUserId,
    );
    if (loggedInUserReaction) return loggedInUserReaction;
    return null;
  };

  function handleShowComments() {
    toggleIsShowComments(true);
    setTimeout(() => {
      if (commentTextareaRef.current) commentTextareaRef.current.focus();
    }, 0);
  }

  useEffect(() => {
    commentsActions.set(propsComments);
  }, [propsComments]);

  useEffect(() => {
    reactionsActions.set(propsReactions);
  }, [propsReactions]);

  return (
    <li className="post">
      <PostHeader creator={creator} createdAt={createdAt} />
      <PostContent text={text} />
      <PostStatistics
        handleShowComments={handleShowComments}
        postId={id}
        comments={comments}
        reactions={reactions}
      />
      <PostActions
        loggedInUserReaction={getLoggedInUserReaction()}
        postId={id}
        commentsActions={commentsActions}
        reactionsActions={reactionsActions}
        showComments={handleShowComments}
      />
      <Condition condition={isShowComments}>
        <PostComments
          commentTextareaRef={commentTextareaRef}
          comments={comments}
          postId={id}
          commentsActions={commentsActions}
        />
      </Condition>
    </li>
  );
}

export default Post;
