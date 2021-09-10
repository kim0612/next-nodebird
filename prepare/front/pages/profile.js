import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import AppLayout from '../components/appLayout';
import ProfileEditForm from '../components/ProfileEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const user = useSelector((state)=>state.user);
  const router = useRouter();

  useEffect(()=>{
    if (!user.isLoggedin && !user.logoutLoading){
      router.push('/');
    };
  }, [user.isLoggedin, user.logoutLoading]);
  
  return (
    <>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        {user.isLoggedin 
        ?
          <>
            <ProfileEditForm/>
            <FollowList header="Follower List" data={user.me.Followers}/>
            <FollowList header="Following List" data={user.me.Followings}/>
          </>
        :
          <div>pls login</div>
        }
      </AppLayout>
    </>
  );
};


export default Profile;