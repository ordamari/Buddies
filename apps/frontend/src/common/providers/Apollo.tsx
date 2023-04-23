import { LoggedInUserData } from '@/features/authentication/types/logged-in-user-data.type';
import { store } from '@/store/store';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { refreshToken } from './helpers/refreshToken';

type PrivateProps = {
  children: React.ReactNode;
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
});

const logoutLink = onError(({ networkError }) => {
  if (networkError?.message === 'invalid token') {
    store.dispatch({
      type: 'auth/clearLoggedInUserData',
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
        const loggedInUserData: LoggedInUserData | undefined =
          res?.data?.refreshToken;
        if (loggedInUserData) {
          console.log(loggedInUserData);

          store.dispatch({
            type: 'auth/setLoggedInUserData',
            payload: {
              ...loggedInUserData,
            },
          });
        }
      });
      return forward(operation);
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: from([refreshTokenMiddleware, logoutLink, httpLink]),
  cache: new InMemoryCache(),
});

function Apollo({ children }: PrivateProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
export default Apollo;
