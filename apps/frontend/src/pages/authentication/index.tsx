import { useMutation } from '@apollo/client';
import {
  GOOGLE_AUTHENTICATE,
  SIGN_IN,
  SIGN_UP,
} from '@/features/authentication/graphQL';
import SignupForm from '@/features/authentication/components/SignupForm';
import LoginForm from '@/features/authentication/components/LoginForm';
import { useToggle } from '@/common/hooks/useToggle';

export default function authentication() {
  const [googleAuthenticate, googleAuthenticateHandler] =
    useMutation(GOOGLE_AUTHENTICATE);
  const [login, loginHandler] = useMutation(SIGN_IN);
  const [signup, signupHandler] = useMutation(SIGN_UP);
  const [shownSignupForm, toggleShownSignupForm] = useToggle(false);

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
          />
          <LoginForm
            onGoogleAuthenticate={googleAuthenticate}
            onLogin={login}
            toggleForm={toggleShownSignupForm}
          />
        </div>
      </div>
    </>
  );
}
