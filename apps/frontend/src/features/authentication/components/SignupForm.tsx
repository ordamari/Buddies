import useTranslation from '@/common/hooks/useTranslation';
import { syncValidation } from '@/common/validations/syncValidation';
import Button from '@/features/ui/Button';
import Input from '@/features/ui/Input';
import { FormEvent, useState } from 'react';
import GoogleAuthentication from './GoogleAuthentication';

type PrivateProps = {
  onGoogleAuthenticate: (value: any) => void;
  onSignup: (value: any) => void;
  toggleForm: (value: any) => void;
};

function SignupForm({
  onGoogleAuthenticate,
  onSignup,
  toggleForm,
}: PrivateProps) {
  const t = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValid = syncValidation.isEmailValid(email);
  const passwordValid = syncValidation.isPasswordValid(password);
  const firstNameValid = syncValidation.isNotEmpty(firstName);
  const lastNameValid = syncValidation.isNotEmpty(lastName);
  const isLoginValid =
    emailValid && passwordValid && firstNameValid && lastNameValid;

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!isLoginValid) return;
    e.preventDefault();
    onSignup({ variables: { email, password } });
  };

  return (
    <div className="signup">
      <form
        className="flex column gap-medium align-center justify-center"
        onSubmit={onsubmit}
      >
        <div className="flex gap-medium w100">
          <Input
            value={firstName}
            onChange={setFirstName}
            type="text"
            placeholder={t('authentication.firstName')}
            className="w100"
          />
          <Input
            value={lastName}
            onChange={setLastName}
            type="text"
            placeholder={t('authentication.lastName')}
            className="w100"
          />
        </div>
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
          {t('authentication.signup')}
        </Button>
        <span>{t('authentication.or')}</span>
        <GoogleAuthentication onGoogleAuthenticate={onGoogleAuthenticate} />
      </form>
      <div className="other-option">
        <span>{t('authentication.alreadyHaveAccount')}</span>
        <button onClick={toggleForm}>{t('authentication.login')}</button>
      </div>
    </div>
  );
}

export default SignupForm;
