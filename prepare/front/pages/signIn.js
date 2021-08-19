import React, { useCallback, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import{ Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

import AppLayout from '../components/appLayout';
import { loginAction } from '../reducers/user';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 14 },
};

const SignIn = () => {
  const router = useRouter();
  const [idid, setIdid] = useState("");
  const [pwpw, setPwpw] = useState("");
  const dispatch = useDispatch();
  
  const onFinish = useCallback( (values) => {
      console.log('Success:', values);
      console.log(`state 값 : \n idid= "${idid}"  pwpw="${pwpw}"`);
      dispatch(loginAction({idid,pwpw}));
      router.push("/");
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