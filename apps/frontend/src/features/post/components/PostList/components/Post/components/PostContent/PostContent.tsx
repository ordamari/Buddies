type PrivateProps = {
  text: string;
};

function PostContent({ text }: PrivateProps) {
  return (
    <div className="content">
      <p>{text}</p>
    </div>
  );
}
export default PostContent;
