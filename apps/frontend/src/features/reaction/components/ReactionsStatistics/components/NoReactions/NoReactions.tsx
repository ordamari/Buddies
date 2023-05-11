import useTranslation from '@/common/hooks/useTranslation';

function NoReactions() {
  const t = useTranslation();
  return <div className="no-reactions">{t('reaction.noReactions')}</div>;
}

export default NoReactions;
