import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import{ Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../components/appLayout';
import { loginRequestAction } from '../reducers/user';
import useInput from '../hooks/useInput';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 14 },
};

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loginLoading, isLoggedin } = useSelector((state)=>state.user);

  useEffect(()=>{
    if(!loginLoading && isLoggedin){
      router.push('/');
    };
  }, [loginLoading, isLoggedin]);

  const [email, onChangeEmail] = useInput("");
  const [pw, onChangePw] = useInput("");


  const onFinish = useCallback( (values) => {
      console.log('Success:', values);
      console.log(`state 값 : \n email= "${email}"  pw="${pw}"`);
      dispatch(loginRequestAction({email,pw}));
    }, [email, pw]);

  const onFinishFailed = useCallback( (errorInfo) => {
      console.log('Failed:', errorInfo);
    }, []);


  return(
    <>
      <Head>
        <title>로그인 | NodeBird</title>
      </Head>
      <AppLayout >

        <Form
          {...layout}
          name="loginForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{marginTop:"50px"}}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input onChange={onChangeEmail}/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={onChangePw}/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loginLoading}>
              Sign In
            </Button>
          </Form.Item>
        </Form>

      </AppLayout>
    </>
  );
}

export default SignIn;