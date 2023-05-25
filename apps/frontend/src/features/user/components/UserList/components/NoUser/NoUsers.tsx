import useTranslation from '@/common/hooks/useTranslation';

type PrivateProps = {
  description?: string;
};

function NoUsers({ description = '' }: PrivateProps) {
  const t = useTranslation();
  return (
    <div className="no-user">
      <h2>{t('user.notFound')}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default NoUsers;
