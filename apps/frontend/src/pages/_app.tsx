import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { globalUtil } from '@/common/utils/global.util';
import cssvariables from '@/common/jsons/cssvariables.json';
import { useEffect } from 'react';
import Layout from '@/common/layout/Layout';
import Redux from '@/common/providers/Redux';
import Apollo from '@/common/providers/Apollo';

export default function App({ Component, pageProps }: AppProps) {
  function onLoad() {
    globalUtil.setCssVariables(cssvariables);
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Apollo>
      <Redux>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Redux>
    </Apollo>
  );
}
