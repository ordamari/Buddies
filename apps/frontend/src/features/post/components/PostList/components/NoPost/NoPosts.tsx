import useTranslation from '@/common/hooks/useTranslation';

function NoPosts() {
  const t = useTranslation();
  return (
    <div className="text-center">
      <h2>{t('No posts found')}</h2>
      <p>{t('No posts found description')}</p>
    </div>
  );
}

export default NoPosts;
