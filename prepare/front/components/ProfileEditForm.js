import React, { useCallback, useState } from "react";
import { Avatar, Button, Form, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";


const ProfileEditForm = () => {
  const nickname = useSelector((state)=>state.user.user.nickname);
  const [changeNickname, setChangeNickname] = useState(nickname);
  const inputHandler = useCallback((e) =>{
    setChangeNickname(e.target.value);
  },[]);
  return(
    <div style={{padding:20}}>
      <Form>
        <Avatar size={64} icon={<UserOutlined />}/>
        <Input value={changeNickname} onChange={inputHandler}/>
        <Button type="primary" htmlType="submit">닉네임 변경</Button>
      </Form>
      <br/>
    </div>
  )
} 
export default ProfileEditForm;