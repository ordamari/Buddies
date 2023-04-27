import Edit from '../assets/svgs/edit.svg';
import Home from '../assets/svgs/home.svg';
import User from '../assets/svgs/user.svg';

export type IconOptions = 'edit' | 'home' | 'user';
type PrivateProps = {
  icon: IconOptions;
};
function Icon({ icon }: PrivateProps) {
  switch (icon) {
    case 'edit':
      return <Edit />;
    case 'home':
      return <Home />;
    case 'user':
      return <User />;
    default:
      return <span>?{icon}?</span>;
  }
}
export default Icon;
