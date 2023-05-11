import { IconOptions } from '@/common/components/Icon';
import useTranslation from '@/common/hooks/useTranslation';
import { useRouter } from 'next/router';
import NavItem from './components/NavItem/NavItem';
import routes from '../../../../common/assets/jsons/routes.json';

export type Route = {
  path: string;
  name: string;
  icon: IconOptions;
};

function RouteList() {
  const router = useRouter();
  const t = useTranslation();
  return (
    <ul>
      {(routes as Route[]).map((route) => {
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
  );
}
export default RouteList;
