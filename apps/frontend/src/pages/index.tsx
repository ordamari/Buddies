import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { gql, useMutation } from '@apollo/client';

type PrivateProps = {
  googleClientId: string;
};

const GOOGLE_AUTHENTICATE = gql`
  mutation GoogleAuthenticate($token: String!) {
    googleAuthenticate(googleTokenInput: { token: $token }) {
      refreshTokenExpires
      accessTokenExpires
    }
  }
`;

export default function Home({ googleClientId }: PrivateProps) {
  const [googleAuthenticate, { data, loading, error }] =
    useMutation(GOOGLE_AUTHENTICATE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={(response) => {
            googleAuthenticate({ variables: { token: response.credential } });
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    } as PrivateProps,
  };
}
