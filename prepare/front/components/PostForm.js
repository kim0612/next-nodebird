import React, { useCallback, useRef, useEffect } from "react";
import { Button, Form, Input } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid'; 

import { addPostRequestAction } from "../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
  const dispatch = useDispatch();

  const { me } = useSelector((state)=>state.user);

  const { addPostLoading ,addPostDone } = useSelector((state)=>state.post);

  const [content, contentHandler, setContent] = useInput('');
  
  useEffect(()=>{
    if(addPostDone){
      setContent('');
    }
  },[addPostDone]);

  const fileUpload = useRef();
  const fileUploadHandler = useCallback(()=>{
    fileUpload.current.click();
  },[fileUpload.current]);

  const submitHandler = useCallback(()=>{
    dispatch(addPostRequestAction({postId:nanoid(), content:content, meId:me.id, meNickname:me.nickname}));
  },[content, me]);

  return(
    <>
      <Form
        style={{margin:"10px 40px"}}
        onFinish={submitHandler}
      >
        <Input.TextArea
          name="content"
          value={content}
          onChange={contentHandler}
          placeholder="개시글을 작성해 주세요."
          rows="5"
          style={{marginBottom:10}}
        />
        <input type="file" accept=".jpg, .jpeg, .png" multiple hidden ref={fileUpload}/>
        <Button onClick={fileUploadHandler}>이미지 업로드</Button>
        <Button 
          type="primary" 
          htmlType="submit" 
          style={{float:"right"}}
          loading={addPostLoading}
        >
          Dummy 업로드
        </Button>
      </Form>
    </>
  )
}
export default PostForm;