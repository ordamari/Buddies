import { Comment } from '@/features/post/types/comment.type';
import { Reaction } from '@/features/post/types/reaction.type';
import CommentsStatistics from './components/CommentsStatistics/CommentsStatistics';
import ReactionsStatistics from './components/ReactionsStatistics/ReactionsStatistics';

type PrivateProps = {
  comments: Comment[];
  reactions: Reaction[];
  postId: number;
};
function PostStatistics({ comments, reactions, postId }: PrivateProps) {
  return (
    <div className="post-statistics flex justify-space-between">
      <ReactionsStatistics reactions={reactions} />
      <CommentsStatistics postId={postId} comments={comments} />
    </div>
  );
}
export default PostStatistics;
