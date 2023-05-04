import useTranslation from '@/common/hooks/useTranslation';

function NoReactions() {
  const t = useTranslation();
  return <div className="no-reactions">{t('post.noReactions')}</div>;
}

export default NoReactions;
