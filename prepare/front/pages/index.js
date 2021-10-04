import React from 'react';
import AppLayout from '../components/appLayout';
import Head from 'next/head';
import {Row, Col, Divider} from 'antd'
import { useSelector } from 'react-redux';

import AntdGridPrac from '../components/AntdGridPrac';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedin, me } = useSelector((state)=>state.user);
  const post = useSelector((state)=>state.post);
  const mainPosts = post.mainPosts;
  return (
    <>
      <Head>
        <title>HOME | NodeBird</title>
      </Head>
      <AppLayout>

        {/* <Divider>ANTD GRID 연습</Divider>
        <AntdGridPrac/> */}

        {
          isLoggedin &&
          <>
            <Divider>Profile</Divider>
            <Row style={{margin:"10px 40px"}} justify="space-around" align="middle">
              <Col span={6} style={{padding:"0px 20px", border:"solid 1px"}}><div>내 게시글 수 : {me.Posts.length}</div></Col>
              <Col span={6} style={{padding:"0px 20px", border:"solid 1px"}}><div>팔로잉 수 : {me.Followings.length}</div></Col>
              <Col span={6} style={{padding:"0px 20px", border:"solid 1px"}}><div>팔로워 수 : {me.Followers.length}</div></Col>
            </Row>
          </>
        }

        <Divider>HOME</Divider>
        {isLoggedin && <PostForm/>}
        {mainPosts.map((post)=>{
          return <PostCard key={post.id} post={post}/>
        })}

      </AppLayout>
    </>
  );
};
export default Home;