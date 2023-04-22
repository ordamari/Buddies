import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { globalUtil } from '@/common/utils/global.util';
import cssvariables from '@/common/jsons/cssvariables.json';
import { useEffect } from 'react';
import { store } from '@/store/store';
import Layout from '@/common/layout/Layout';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  function onLoad() {
    globalUtil.setCssVariables(cssvariables);
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}
