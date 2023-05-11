import { gql } from '@apollo/client';

export const GOOGLE_AUTHENTICATE = gql`
  mutation GoogleAuthenticate($token: String!) {
    googleAuthenticate(googleTokenInput: { token: $token }) {
      refreshTokenExpires
      accessTokenExpires
      firstName
      lastName
      email
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(signInInput: { password: $password, email: $email }) {
      refreshTokenExpires
      accessTokenExpires
      firstName
      lastName
      email
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signUp(
      signUpInput: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      refreshTokenExpires
      accessTokenExpires
      firstName
      lastName
      email
    }
  }
`;

export const REFRESH_TOKENS = gql`
  mutation RefreshToken {
    refreshToken {
      refreshTokenExpires
      accessTokenExpires
      firstName
      lastName
      email
    }
  }
`;
