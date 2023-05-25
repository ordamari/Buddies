import { AuthData } from '@/features/authentication/types/auth.type';
import { store } from '@/store/store';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { refreshToken } from './helpers/refreshToken';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';

type PrivateProps = {
  children: React.ReactNode;
};

const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Apollo-Require-Preflight': 'true',
    },
  };
});

const logoutLink = onError(({ networkError }) => {
  if (networkError?.message === 'invalid token') {
    store.dispatch({
      type: 'auth/clearAuthData',
    });
    store.dispatch({
      type: 'auth/clearLoggedInUser',
    });
  }
});

const refreshTokenMiddleware = new ApolloLink((operation, forward) => {
  const accessTokenExpires = store.getState().auth.accessTokenExpires;
  if (
    !accessTokenExpires ||
    accessTokenExpires.getTime() < new Date().getTime()
  ) {
    refreshToken().then((res) => {
      res.json().then((res) => {
        const loggedInUserData: AuthData | undefined = res?.data?.refreshToken;
        if (loggedInUserData) {
          store.dispatch({
            type: 'auth/setAuthData',
            payload: {
              ...loggedInUserData,
            },
          });
        } else {
          store.dispatch({
            type: 'auth/clearAuthData',
          });
        }
      });
      return forward(operation);
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: from([authLink, logoutLink, refreshTokenMiddleware, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

function Apollo({ children }: PrivateProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
export default Apollo;
