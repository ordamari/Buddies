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
  comments,
  reactions,
  id,
}: privateProps) {
  return (
    <li className="post">
      <PostHeader creator={creator} createdAt={createdAt} />
      <PostContent text={text} />
      <PostStatistics postId={id} comments={comments} reactions={reactions} />
      <PostActions postId={id} />
    </li>
  );
}

export default Post;
