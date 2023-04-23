import { useMutation } from '@apollo/client';
import {
  GOOGLE_AUTHENTICATE,
  SIGN_IN,
  SIGN_UP,
} from '@/features/authentication/graphQL';
import SignupForm from '@/features/authentication/components/SignupForm';
import LoginForm from '@/features/authentication/components/LoginForm';
import { useToggle } from '@/common/hooks/useToggle';
import { useEffect } from 'react';
import { LoggedInUserData } from '../../features/authentication/types/logged-in-user-data.type';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLoggedInUserData } from '@/features/authentication/slices/auth.slice';

export default function authentication() {
  const [googleAuthenticate, googleAuthenticateHandler] =
    useMutation(GOOGLE_AUTHENTICATE);
  const [login, loginHandler] = useMutation(SIGN_IN);
  const [signup, signupHandler] = useMutation(SIGN_UP);
  const [shownSignupForm, toggleShownSignupForm] = useToggle(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let loggedInUser: LoggedInUserData | null = null;
    if (loginHandler.data) loggedInUser = loginHandler.data.signIn;
    if (signupHandler.data) loggedInUser = signupHandler.data.signUp;
    if (googleAuthenticateHandler.data) {
      loggedInUser = googleAuthenticateHandler.data.googleAuthenticate;
    }
    if (loggedInUser) {
      dispatch(setLoggedInUserData(loggedInUser));
      router.push('/');
    }
  }, [loginHandler.data, signupHandler.data, googleAuthenticateHandler.data]);

  const isLoading =
    signupHandler.loading ||
    googleAuthenticateHandler.loading ||
    loginHandler.loading;

  return (
    <>
      <div className="authentication-page">
        <div
          className={`container show-${shownSignupForm ? 'signup' : 'login'}`}
        >
          <SignupForm
            onSignup={signup}
            onGoogleAuthenticate={googleAuthenticate}
            toggleForm={toggleShownSignupForm}
            error={signupHandler.error}
            googleError={googleAuthenticateHandler.error}
            isLoading={isLoading}
          />
          <LoginForm
            onGoogleAuthenticate={googleAuthenticate}
            onLogin={login}
            toggleForm={toggleShownSignupForm}
            error={loginHandler.error}
            googleError={googleAuthenticateHandler.error}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
}
