import React from 'react';
import AppLayout from '../components/appLayout';
import Head from 'next/head';
import {Row, Col, Divider} from 'antd'
import { useSelector } from 'react-redux';

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
          <Divider>ANTD GRID 연습</Divider>
          <>
            <Row style={{height:30,backgroundColor:"red"}}>
              a
            </Row>
            <Row style={{margin:"10px 0"}}>
              <Col span={6} style={{backgroundColor:"skyblue"}}>b</Col>
              <Col span={18}>
                <Row gutter={[0,8]}>
                  <Col span={24} style={{backgroundColor:"yellow"}}>d</Col>
                  <Col span={24} style={{backgroundColor:"yellowgreen"}}>e</Col>
                  <Col span={24} style={{backgroundColor:"coral"}}>f</Col>
                </Row>
                {/* <Row style={{backgroundColor:"yellow"}}>
                  d
                </Row>
                <Row style={{backgroundColor:"yellowgreen"}}>
                  e
                </Row>
                <Row style={{backgroundColor:"coral"}}>
                  f
                </Row> */}
              </Col>
            </Row>
            <Row style={{height:30,backgroundColor:"green"}}>
              c
            </Row>
          </>
          
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