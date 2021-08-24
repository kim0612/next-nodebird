import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Checkbox, Form, Input, Button, Divider } from 'antd';

import AppLayout from '../components/appLayout';
import useInput from '../hooks/useInput';

const SignUp = () => {
  const isLoggedin = useSelector(state=>state.user.isLoggedin);
  const router = useRouter();

  const [id, idHandler] = useInput("");
  const [passWord, passWordHandler] = useInput("");
  const [passWord2, passWordHandler2] = useInput("");
  const [nickName, nickNameHandler] = useInput("");
  /*
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWord2, setPassWord2] = useState("");
  const [nickName, setNickName] = useState("");
  
  const idHandler = (e)=>{
    setId(e.target.value);
  };
  const passWordHandler = (e)=>{
    setPassWord(e.target.value);
  };
  const passWordHandler2 = (e)=>{
    setPassWord2(e.target.value);
  };
  const nickNameHandler = (e)=>{
    setNickName(e.target.value);
  };
*/

 const [isAgree, setIsAgree] = useState(false);
 
 const submitHandler = () => {
   if(passWord2===passWord && id && passWord && nickName && isAgree){
     console.log(`회원가입데이터 => id:${id}, nickName:${nickName}, passWord:${passWord}`);
    }else{
      console.log("불가");
    }
  };

  useEffect(()=>{
    if(isLoggedin){
      router.push("/profile");
    }
  }, [isLoggedin]);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Divider>회원가입</Divider>
        <Form labelCol={{span:7}} wrapperCol={{span:10}} onFinish={submitHandler}>
          <Form.Item label="ID">
            <Input value={id} onChange={idHandler}/>
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
              disabled={!(passWord2===passWord && id && passWord && nickName && isAgree)}
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