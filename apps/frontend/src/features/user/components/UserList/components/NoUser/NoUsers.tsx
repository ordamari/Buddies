import useTranslation from '@/common/hooks/useTranslation';

function NoUsers() {
  const t = useTranslation();
  return (
    <div className="text-center">
      <h2>{t('No users found')}</h2>
      <p>{t('No users found description')}</p>
    </div>
  );
}

export default NoUsers;
