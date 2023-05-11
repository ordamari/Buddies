import Icon from '@/common/components/Icon';
import Link from 'next/link';
import { Route } from '../../RouteList';

type PrivateProps = { isActive: boolean } & Route;
function NavItem({ icon, name, path, isActive }: PrivateProps) {
  return (
    <div className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link className={isActive ? 'active' : ''} href={path}>
        <Icon icon={icon} />
      </Link>
      <span className="name">{name}</span>
    </div>
  );
}
export default NavItem;
