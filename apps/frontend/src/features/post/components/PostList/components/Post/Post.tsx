import { Post as TypePost } from '../../../../types/post.type';

type privateProps = {
  key: number;
} & TypePost;
function Post({ text }: privateProps) {
  return (
    <div className="post">
      <h2 className="post-title">{text}</h2>
    </div>
  );
}

export default Post;
