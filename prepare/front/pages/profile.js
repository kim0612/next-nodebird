import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import AppLayout from '../components/appLayout';
import ProfileEditForm from '../components/ProfileEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  console.log("profile 페이지 들어갑니다잉");
  let user = useSelector((state)=>state.user);
  // let followerList;
  // let followingList
  // if(isLoggedin){
  //   followerList = useSelector((state)=>state.user.user.Followers);
  //   followingList = useSelector((state)=>state.user.user.Followings);
  // }
  console.log(user);

  useEffect(()=>{
    console.log("로그인했나?",user.isLoggedin);
  },[user.isLoggedin])
  
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
            <FollowList header="Follower List" data={user.user.Followers}/>
            <FollowList header="Following List" data={user.user.Followings}/>
          </>
        :
          <div>pls login</div>
        }
      </AppLayout>
    </>
  );
};


export default Profile;