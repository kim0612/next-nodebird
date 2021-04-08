import React from 'react';
import AppLayout from '../components/appLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME | NEXTBIRD</title>
      </Head>
      <AppLayout>
          Hello next!
      </AppLayout>
    </>
  );
};
export default Home;