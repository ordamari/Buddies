import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

type PrivateProps = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
  credentials: 'include',
});

function Apollo({ children }: PrivateProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
export default Apollo;
