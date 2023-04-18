import useTranslation from '@/common/hooks/useTranslation';
import { syncValidation } from '@/common/validations/syncValidation';
import Button from '@/features/ui/Button';
import Input from '@/features/ui/Input';
import { FormEvent, useState } from 'react';
import GoogleAuthentication from './GoogleAuthentication';

type PrivateProps = {
  onGoogleAuthenticate: (value: any) => void;
  onLogin: (value: any) => void;
  toggleForm: (value: any) => void;
};

function LoginForm({
  onGoogleAuthenticate,
  onLogin,
  toggleForm,
}: PrivateProps) {
  const t = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValid = syncValidation.isEmailValid(email);
  const passwordValid = syncValidation.isPasswordValid(password);
  const isLoginValid = emailValid && passwordValid;

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!isLoginValid) return;
    e.preventDefault();
    onLogin({ variables: { email, password } });
  };

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
