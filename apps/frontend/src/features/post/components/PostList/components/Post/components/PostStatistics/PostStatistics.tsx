import CommentsStatistics from '@/features/comment/components/CommentsStatistics/CommentsStatistics';
import { Comment } from '@/features/comment/types/comment.type';
import ReactionsStatistics from '@/features/reaction/components/ReactionsStatistics/ReactionsStatistics';
import { Reaction } from '@/features/reaction/types/reaction.type';

type PrivateProps = {
  comments: Comment[];
  reactions: Reaction[];
  postId: number;
  handleShowComments: () => void;
};
function PostStatistics({
  comments,
  reactions,
  handleShowComments,
}: PrivateProps) {
  return (
    <div className="post-statistics flex justify-space-between">
      <ReactionsStatistics reactions={reactions} />
      <CommentsStatistics onClick={handleShowComments} comments={comments} />
    </div>
  );
}
export default PostStatistics;
