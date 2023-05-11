import Edit from '../assets/svgs/edit.svg';
import Home from '../assets/svgs/home.svg';
import User from '../assets/svgs/user.svg';
import Comment from '../assets/svgs/comment.svg';
import Like from '../assets/svgs/like.svg';

export type IconOptions = 'edit' | 'home' | 'user' | 'comment' | 'like';
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
    case 'comment':
      return <Comment />;
    case 'like':
      return <Like />;
    default:
      return <span>?{icon}?</span>;
  }
}
export default Icon;
