import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';

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

  return (
    <>
      <div className="home-page">
        <Link href={'/authentication'}>authentication</Link>
      </div>
    </>
  );
}
