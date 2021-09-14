import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Form, Input, Button, Divider } from 'antd';

import AppLayout from '../components/appLayout';
import useInput from '../hooks/useInput';
import { signupRequestAction } from '../reducers/user';

const SignUp = () => {
  const { signUpData, signupLoading } = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, emailHandler] = useInput("");
  const [passWord, passWordHandler] = useInput("");
  const [passWord2, passWordHandler2] = useInput("");
  const [nickName, nickNameHandler] = useInput("");
  
  const [isAgree, setIsAgree] = useState(false);
 
  const submitHandler = useCallback( () => {
    if (passWord2===passWord && email && passWord && nickName && isAgree) {
      console.log(`회원가입데이터 => email:${email}, nickName:${nickName}, passWord:${passWord}`);
      dispatch(signupRequestAction({email, passWord, nickName}));
    }
    else {
      console.log("!!불가!!");
    }
  }, [email, passWord, passWord2, nickName, isAgree]);

  useEffect(()=>{
    if(signUpData){
      router.push("/signIn");
    }
  }, [signUpData]);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Divider>회원가입</Divider>
        <Form labelCol={{span:7}} wrapperCol={{span:10}} onFinish={submitHandler}>
          <Form.Item label="EMAIL">
            <Input value={email} onChange={emailHandler}/>
          </Form.Item>
          <Form.Item label="닉네임">
            <Input value={nickName} onChange={nickNameHandler}/>
          </Form.Item>
          <Form.Item label="PassWord">
            <Input.Password value={passWord} onChange={passWordHandler}/>
          </Form.Item>
          <Form.Item label="PassWord Check">
            <Input.Password value={passWord2} onChange={passWordHandler2}/>
            {passWord2!==passWord && <div style={{ color:"red", fontSize:"10px"}}>비밀번호를 확인해 주세요</div>}
          </Form.Item>
          <div style={{marginLeft:"29.2vw"}}>
            <Checkbox onChange={()=>{setIsAgree(!isAgree)}}>약관에 동의하십니까?</Checkbox>
            {!isAgree && <div style={{color:"red", fontSize:"10px"}}>약관에 동의헤 주세요</div>}
          </div>
          <div style={{marginLeft:"62vw"}}>
            <Button 
              size='small' 
              type="primary" 
              htmlType="submit" 
              disabled={!(passWord2===passWord && email && passWord && nickName && isAgree)}
              loading = {signupLoading}
            >
              Submit
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};
export default SignUp;