import useArray from '@/common/hooks/useArray';
import { Comment } from '@/features/post/types/comment.type';
import { Reaction } from '@/features/post/types/reaction.type';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
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
      <PostStatistics postId={id} comments={comments} reactions={reactions} />
      <PostActions
        loggedInUserReaction={getLoggedInUserReaction()}
        postId={id}
        commentsActions={commentsActions}
        reactionsActions={reactionsActions}
      />
    </li>
  );
}

export default Post;
