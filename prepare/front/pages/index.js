import React from 'react';
import AppLayout from '../components/appLayout';
import Head from 'next/head';
import {Row, Col, Divider} from 'antd'

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME | NodeBird</title>
      </Head>
      <AppLayout>
          GRID 연습
          <div>
            <Row style={{height:30,backgroundColor:"red"}}>
              a
            </Row>
            <Row>
              <Col span={6} style={{backgroundColor:"skyblue"}}>b</Col>
              <Col span={18}>
                <Row style={{backgroundColor:"yellow"}}>
                  d
                </Row>
                <Row style={{backgroundColor:"yellowgreen"}}>
                  e
                </Row>
                <Row style={{backgroundColor:"coral"}}>
                  f
                </Row>
              </Col>
            </Row>
            <Row style={{height:30,backgroundColor:"green"}}>
              c
            </Row>
          </div>
          <Divider orientation="middle">HOME</Divider>
          asdf
      </AppLayout>
    </>
  );
};
export default Home;