import React from 'react';
import AppLayout from '../components/appLayout';
import Head from 'next/head';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>회원가입 페이지</div>
      </AppLayout>
    </>
  );
};
export default SignUp;