import { Comment } from '@/features/post/types/comment.type';
import { Reaction } from '@/features/post/types/reaction.type';

type PrivateProps = {
  comments: Comment[];
  reactions: Reaction[];
};
function PostStatistics({ comments, reactions }: PrivateProps) {
  return (
    <div className="statistics flex justify-space-between">
      <div className="comments">{comments.length} comments</div>
      <div className="reactions">{reactions.length} reactions</div>
    </div>
  );
}
export default PostStatistics;
