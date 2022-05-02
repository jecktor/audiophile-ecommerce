import Head from 'next/head';
import type { ReactNode } from 'react';

import { Header, Footer } from '.';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Audiophile</title>
      <meta
        name="description"
        content="Welcome to Audiophile, E-Commerce app made with Next.js"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
