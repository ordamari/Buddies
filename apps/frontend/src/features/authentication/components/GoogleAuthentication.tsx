import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

type PrivateProps = {
  onGoogleAuthenticate: (value: any) => void;
};

function GoogleAuthentication({ onGoogleAuthenticate }: PrivateProps) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={googleClientId ? googleClientId : ''}>
      <GoogleLogin
        onSuccess={(response) => {
          onGoogleAuthenticate({ variables: { token: response.credential } });
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleAuthentication;
