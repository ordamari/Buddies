import useTranslation from '@/common/hooks/useTranslation';

type PrivateProps = {
  notFoundDescription?: string;
};

function NoPosts({ notFoundDescription }: PrivateProps) {
  const t = useTranslation();

  return (
    <div className="no-posts">
      <h2>{t('post.notFound')}</h2>
      <p>{notFoundDescription}</p>
    </div>
  );
}

export default NoPosts;
