import React, { useCallback, useRef, useEffect } from "react";
import { Button, Form, Input } from "antd"
import { useDispatch, useSelector } from "react-redux";

import { addPostRequestAction } from "../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
  const dispatch = useDispatch();

  const [content, contentHandler, setContent] = useInput('');
  
  const { addPostDone } = useSelector((state)=>state.post);
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
    dispatch(addPostRequestAction);
  },[]);

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
        >
          Dummy 업로드
        </Button>
      </Form>
    </>
  )
}
export default PostForm;