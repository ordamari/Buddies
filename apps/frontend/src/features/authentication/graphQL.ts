import { gql } from '@apollo/client';

export const GOOGLE_AUTHENTICATE = gql`
  mutation GoogleAuthenticate($token: String!) {
    googleAuthenticate(googleTokenInput: { token: $token }) {
      refreshTokenExpires
      accessTokenExpires
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(signInInput: { password: $password, email: $email }) {
      refreshTokenExpires
      accessTokenExpires
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(signUpInput: { email: $email, password: $password }) {
      id
      email
    }
  }
`;
