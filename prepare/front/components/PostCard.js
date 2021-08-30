import React, { useState } from "react";
import { Card, Popover, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, CommentOutlined,EllipsisOutlined } from "@ant-design/icons";

const PostCard = ({post}) => {
  const [heart,setHeart] = useState(false);
  const onToggleHeart = () => {
    setHeart((prev)=>!prev)
  };
  const popOverContent = (<></>);
  let cards;
  cards = post.mainPosts.map((post1)=>{
    return(
      <Card
        key={post1.id}
        style={{margin:"10px 40px"}}
        cover={post1.Images.length === 0 ? <></> : <img style={{margin:"20px", width:"30vw"}} alt="img1" src={post1.Images[0].src}></img>}
        actions={[
          <RetweetOutlined key="retweet"/>,
          (heart) ? <HeartTwoTone twoToneColor="#eb2f96" key="heart2" onClick={onToggleHeart}/> : <HeartOutlined key="heart1" onClick={onToggleHeart}/>,
          <CommentOutlined key="comment"/>,
          <Popover key="popover" content={<><p>hello</p><p>hi</p></>}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post1.User.nickname[0]}</Avatar>}
          title={post1.User.nickname}
          description={post1.content}
        />
      </Card>
    )
  });
  return(
    <>
      {cards}
    </>
  )
}
export default PostCard;