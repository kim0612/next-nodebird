import React, { useCallback, useState } from 'react';
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
  const [idid, setIdid] = useState("");
  const [pwpw, setPwpw] = useState("");
  
  const onFinish = useCallback( (values) => {
      console.log('Success:', values);
      // setIdid(values.username);
      // setPwpw(values.password);
      console.log(`state 값 : \n idid= "${idid}"  pwpw="${pwpw}"`);
    }, [idid, pwpw]);

  const onFinishFailed = useCallback( (errorInfo) => {
      console.log('Failed:', errorInfo);
    }, []);

  const onChangeIdid = useCallback( (e) => {
      setIdid(e.target.value);
      console.log(idid);
    }, [idid]);

  const onChangePwpw = useCallback( (e) => {
    setPwpw(e.target.value);
    console.log(pwpw);
  }, [pwpw]);

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
            <Input onChange={onChangeIdid}/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={onChangePwpw}/>
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