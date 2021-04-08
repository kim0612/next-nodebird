import React from 'react';
import AppLayout from '../components/appLayout';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        profile page!
      </AppLayout>
    </>
  );
};
export default Profile;