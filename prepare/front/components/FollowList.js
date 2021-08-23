import React from "react";
import { Row, Col, Divider, Card, Avatar } from "antd";

const FollowList = ({header, data}) => {
  let dataToCard = data.map((item)=>{
    return(
      <Col span={8} key={item.nickname}>
        <Card>
          <Card.Meta avatar={<Avatar>{item.nickname}</Avatar>} title={item.nickname} description={`${item.nickname}is...`}/>
        </Card>
      </Col>
    )
  });
  
  return(
    <>
      <Divider>{header}</Divider>
      <Row gutter={10} style={{margin:20}}>
        {dataToCard}
      </Row>
    </>
  )
}
export default FollowList;