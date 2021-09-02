import React, { useCallback } from 'react';
import { List, Avatar, Divider, Form, Input, Button } from 'antd';

import useInput from '../hooks/useInput';

const PostCardComment = ({post}) => {
  const comments = post.Comments;
  const [newComment, newCommentHandler] = useInput("");
  const submitNewComment = useCallback(()=>{
    console.log(`게시물 id: ${post.id} / 새 댓글: ${newComment}`);
  }, [newComment])
  return(
    <div style={{margin:"0px 40px", padding:"10px", border: "1px solid #f0f0f0"}}>
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