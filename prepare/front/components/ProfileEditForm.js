import React, { useCallback, useState } from "react";
import { Avatar, Button, Form, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

import useInput from "../hooks/useInput";

const ProfileEditForm = () => {
  const nickname = useSelector((state)=>state.user.me.nickname);
  
  const [changeNickname, changeNicknameHandler] = useInput(nickname);
  // const [changeNickname, setChangeNickname] = useState(nickname);
  // const changeNicknameHandler = useCallback((e) =>{
  //   setChangeNickname(e.target.value);
  // },[]);

  return(
    <div style={{padding:20}}>
      <Form>
        <Avatar size={64} icon={<UserOutlined />}/>
        <Input value={changeNickname} onChange={changeNicknameHandler}/>
        <Button type="primary" htmlType="submit">닉네임 변경</Button>
      </Form>
      <br/>
    </div>
  )
} 
export default ProfileEditForm;