import useRefreshToken from '@/features/authentication/hooks/useRefreshToken';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Language } from '../enums/language.enum';

type PrivateProps = { children: React.ReactNode };

function Layout({ children }: PrivateProps) {
  const globals = useSelector((state: RootState) => state.global);

  return (
    <div
      className={`app ${globals.language === Language.Hebrew ? 'rtl' : 'ltr'} ${
        globals.theme
      }`}
    >
      {children}
    </div>
  );
}

export default Layout;
