import useTranslation from '@/common/hooks/useTranslation';

function NoFriends() {
  const t = useTranslation();
  return <div className="no-friends">{t('user.noFriends')}</div>;
}
export default NoFriends;
