import { GET_LOGGED_IN_USER } from '@/features/user/graphQL';
import { setLoggedInUser } from '@/features/user/slices/loggedInUser.slice';
import { RootState } from '@/store/store';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type privateProps = {
  children: React.ReactNode;
};

function AuthGuard({ children }: privateProps) {
  const auth = useSelector((state: RootState) => state.auth);
  const userHandler = useQuery(GET_LOGGED_IN_USER);
  const router = useRouter();
  const dispatch = useDispatch();

  console.log({ auth, userHandler });

  useEffect(() => {
    if (!!auth.accessTokenExpires && userHandler.error) {
      router.push('/authentication');
    }
  }, [auth]);

  useEffect(() => {
    if (!auth.accessTokenExpires) {
      console.log('no auth');

      userHandler.refetch();
    }
  }, [auth]);

  useEffect(() => {
    if (userHandler.data) {
      dispatch(setLoggedInUser(userHandler.data.loggedInUser));
    }
  }, [userHandler.data]);

  useEffect(() => {
    if (userHandler.error) {
      router.push('/authentication');
    }
  }, [userHandler.error]);

  if (auth.accessTokenExpires && userHandler.data) {
    return <>{children}</>;
  }

  return null;
}

export default AuthGuard;
