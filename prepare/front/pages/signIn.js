import React, { useState } from 'react';
import Head from 'next/head'
import{ Form, Input, Button, Checkbox } from 'antd';

import AppLayout from '../components/appLayout';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 14 },
};

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <>
      <Head>
        <title>로그인 | NodeBird</title>
      </Head>
      <AppLayout>

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
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>

      </AppLayout>
    </>
  );
}

export default SignIn;