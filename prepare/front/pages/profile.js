import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/appLayout';

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