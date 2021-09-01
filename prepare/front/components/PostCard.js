import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Card, Popover, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, CommentOutlined,EllipsisOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import PostCardComment from "./PostCardComment";

const PostCard = ({post, item}) => {
  const me = useSelector((state)=>state.user.me);
  const [heart,setHeart] = useState(false);
  const onToggleHeart = () => {
    setHeart((prev)=>!prev)
  };
  const [commentON, setCommentOn] = useState(false);
  const onToggleCommentOn = () => {
    setCommentOn((prev)=>!prev)
  }
  const popOverContent2 = <>신고</>
  const popOverContent1 = <><div>수정</div><div>삭제</div></>;
  return(
    <>
      <Card
        style={{margin:"10px 40px"}}
        cover={item.Images.length === 0 ? <></> : <img style={{margin:"20px", width:"30vw"}} alt="img1" src={item.Images[0].src}></img>}
        actions={[
          <RetweetOutlined key="retweet"/>,
          (heart) ? <HeartTwoTone twoToneColor="#eb2f96" key="heart2" onClick={onToggleHeart}/> : <HeartOutlined key="heart1" onClick={onToggleHeart}/>,
          <CommentOutlined key="comment" onClick={onToggleCommentOn}/>,
          <Popover key="popover" content={(me && me.id===item.User.id && me.nickname===item.User.nickname)?popOverContent1:popOverContent2}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
          title={item.User.nickname}
          description={item.content}
        />
      </Card>
      {commentON && <PostCardComment/>}
    </>
  )
}

PostCard.propTypes={
  post: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default PostCard;