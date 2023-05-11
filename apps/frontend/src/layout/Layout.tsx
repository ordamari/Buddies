import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Language } from '../common/enums/language.enum';
import Navbar from './navbar/Navbar';

type PrivateProps = { children: React.ReactNode };

function Layout({ children }: PrivateProps) {
  const globals = useSelector((state: RootState) => state.global);

  return (
    <div
      className={`app ${globals.language === Language.Hebrew ? 'rtl' : 'ltr'} ${
        globals.theme
      }`}
    >
      <Navbar />
      <div className="main-container page">{children}</div>
    </div>
  );
}

export default Layout;
