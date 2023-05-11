import useTranslation from '@/common/hooks/useTranslation';
import { syncValidation } from '@/common/validations/syncValidation';
import Button from '@/layout/ui/Button';
import Input from '@/layout/ui/Input';
import { ApolloError } from '@apollo/client';
import { FormEvent, useState } from 'react';
import GoogleAuthentication from '../GoogleAuthentication/GoogleAuthentication';

type PrivateProps = {
  onGoogleAuthenticate: (value: any) => void;
  onLogin: (value: any) => void;
  toggleForm: (value: any) => void;
  error: ApolloError | undefined;
  googleError: ApolloError | undefined;
  isLoading: boolean;
};

function LoginForm({
  onGoogleAuthenticate,
  onLogin,
  toggleForm,
  isLoading,
}: PrivateProps) {
  const t = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValid = syncValidation.isEmailValid(email);
  const passwordValid = syncValidation.isPasswordValid(password);
  const isLoginValid = emailValid && passwordValid && !isLoading;

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!isLoginValid) return;
    e.preventDefault();
    onLogin({ variables: { email, password } });
    clearForm();
  };

  function clearForm() {
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login">
      <form
        className="flex column gap-medium align-center justify-center h100"
        onSubmit={onsubmit}
      >
        <Input
          value={email}
          onChange={setEmail}
          type="text"
          placeholder={t('authentication.email')}
          className="w100"
        />
        <Input
          value={password}
          onChange={setPassword}
          type="password"
          placeholder={t('authentication.password')}
          className="w100"
        />
        <Button className="primary w100" disabled={!isLoginValid}>
          {t('authentication.login')}
        </Button>

        <span>{t('authentication.or')}</span>

        <GoogleAuthentication onGoogleAuthenticate={onGoogleAuthenticate} />
      </form>
      <div className="other-option">
        <span>{t('authentication.doNotHaveAccount')}</span>
        <button onClick={toggleForm}>{t('authentication.signup')}</button>
      </div>
    </div>
  );
}

export default LoginForm;
