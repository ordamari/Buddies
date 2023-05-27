import ReadMoreLess from '@/common/components/ReadMoreLess/ReadMoreLess';

type PrivateProps = {
  text: string;
};

function PostContent({ text }: PrivateProps) {
  return (
    <div className="content">
      <ReadMoreLess>{text}</ReadMoreLess>
    </div>
  );
}
export default PostContent;
