import { RootState } from '@/store/store';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REFRESH_TOKENS } from '../graphQL';
import { setAuthData } from '../slices/auth.slice';

function useRefreshToken() {
  const auth = useSelector((state: RootState) => state.auth);
  const [refreshTokens, refreshTokenHandler] = useMutation(REFRESH_TOKENS, {
    errorPolicy: 'all',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.refreshTokenExpires) {
      refreshTokens();
    }
  }, []);

  useEffect(() => {
    if (refreshTokenHandler.error) {
      console.log(refreshTokenHandler.error);
    }
    if (refreshTokenHandler.data) {
      const loggedInUser = refreshTokenHandler.data.refreshToken;
      dispatch(setAuthData(loggedInUser));
    }
  }, [refreshTokenHandler.data, refreshTokenHandler.error]);
}

export default useRefreshToken;
