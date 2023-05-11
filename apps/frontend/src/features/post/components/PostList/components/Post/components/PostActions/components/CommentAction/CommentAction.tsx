import Icon from '@/common/components/Icon';
import useTranslation from '@/common/hooks/useTranslation';

type PrivateProps = {
  showComments: () => void;
};

function CommentAction({ showComments }: PrivateProps) {
  const t = useTranslation();

  return (
    <button onClick={showComments} className="action-button">
      <Icon icon="comment" />
      {t('post.comment')}
    </button>
  );
}
export default CommentAction;
