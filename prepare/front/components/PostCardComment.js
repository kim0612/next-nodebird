import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar, Divider, Form, Input, Button } from 'antd';

import useInput from '../hooks/useInput';
import { addCommentRequestAction } from '../reducers/post';

const PostCardComment = ({post}) => {
  const comments = post.Comments;
  const { me } = useSelector((state)=>state.user);

  const dispatch = useDispatch();

  const [newComment, newCommentHandler, setNewComment] = useInput("");
  
  const { addCommentDone } = useSelector((state)=>state.post);
  useEffect(()=>{
    if(addCommentDone){
      setNewComment('');
    }
  },[addCommentDone]);
  
  const submitNewComment = useCallback(()=>{
    console.log(`게시물 id: ${post.id} / 새 댓글: ${newComment} / ME id : ${me.id}`);
    dispatch(addCommentRequestAction({postId:post.id, content:newComment, meId:me.id}));
  }, [newComment]);
  return(
    <div style={{margin:"-10px 40px 0px 40px", padding:"10px", border: "1px solid #f0f0f0"}}>
      {
        me && 
        <>
          <Form
            onFinish={submitNewComment}
          >
            <Input.TextArea
              value={newComment}
              onChange={newCommentHandler}
              placeholder="댓글을 작성해 주세요."
              rows="4"
            />
            <Button type="primary" htmlType="submit">완료</Button>
          </Form>
          <Divider style={{marginBottom:"0px"}}/>
        </>
      }
      
      <List
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(data)=>(
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{data.User.nickname[0]}</Avatar>}
              title={data.User.nickname}
              description={data.content}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
export default PostCardComment;