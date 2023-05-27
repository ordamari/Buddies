import Condition from '@/common/components/Condition';
import ProfileImage from '@/features/user/components/ProfileImage/ProfileImage';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import RouteList from './components/RouteList/RouteList';

function Navbar() {
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser);
  const imageLinkHref = loggedInUser ? `/profile` : '/authentication';
  const router = useRouter();
  const imageAlt = loggedInUser
    ? `${loggedInUser.firstName} ${loggedInUser.lastName}`
    : 'authenticating user';

  return (
    <Condition condition={router.pathname !== '/authentication'}>
      <nav>
        <div className="main-container">
          <div className="navbar">
            <Link className="image-container" href={imageLinkHref}>
              <ProfileImage
                src={loggedInUser.profileImageUrl}
                alt={imageAlt}
                width={40}
                height={40}
              />
            </Link>
            <RouteList />
          </div>
        </div>
      </nav>
    </Condition>
  );
}
export default Navbar;
