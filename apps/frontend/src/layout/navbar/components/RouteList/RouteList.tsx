import { IconOptions } from '@/common/components/Icon';
import useTranslation from '@/common/hooks/useTranslation';
import { useRouter } from 'next/router';
import NavItem from './components/NavItem/NavItem';

export type Route = {
  path: string;
  name: string;
  icon: IconOptions;
};

const routes: Route[] = [
  { path: '/', name: 'home', icon: 'home' },
  { path: '/post', name: 'edit', icon: 'edit' },
  { path: '/profile', name: 'profile', icon: 'user' },
];

function RouteList() {
  const router = useRouter();
  const t = useTranslation();
  return (
    <div className="main-container">
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <NavItem
                {...route}
                name={t(route.name)}
                isActive={router.pathname === route.path}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default RouteList;
