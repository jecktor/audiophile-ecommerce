import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { Layout } from '../components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
