import PostPlaceholder from './components/PostPlaceholder/PostPlaceholder';

type PrivateProps = {
  length?: number;
};

function PostListPlaceholder({ length = 5 }: PrivateProps) {
  return (
    <ul className="post-list">
      {Array.from({ length }, (_, i) => (
        <PostPlaceholder key={i} />
      ))}
    </ul>
  );
}

export default PostListPlaceholder;
