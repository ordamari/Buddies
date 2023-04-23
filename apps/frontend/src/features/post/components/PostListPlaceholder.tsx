import PostPlaceholder from './PostPlaceholder';

type PrivateProps = {
  length?: number;
};

function PostListPlaceholder({ length = 5 }: PrivateProps) {
  return (
    <ul>
      {Array.from({ length }, (_, i) => (
        <PostPlaceholder key={i} />
      ))}
    </ul>
  );
}

export default PostListPlaceholder;
