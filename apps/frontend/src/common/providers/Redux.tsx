import { store } from '@/store/store';

import { Provider } from 'react-redux';

type PrivateProps = {
  children: React.ReactNode;
};

function Redux({ children }: PrivateProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default Redux;
