import React from 'react';
import { Row, Col } from 'antd';

const antdGridPrac = () => {
  return(
    <>
      <Row style={{height:30,backgroundColor:"red"}}>
        a
      </Row>
      <Row style={{margin:"10px 0"}}>
        <Col span={6} style={{backgroundColor:"skyblue"}}>b</Col>
        <Col span={18}>
          <Row gutter={[0,8]}>
            <Col span={24} style={{backgroundColor:"yellow"}}>d</Col>
            <Col span={24} style={{backgroundColor:"yellowgreen"}}>e</Col>
            <Col span={24} style={{backgroundColor:"coral"}}>f</Col>
          </Row>
          {/* <Row style={{backgroundColor:"yellow"}}>
            d
          </Row>
          <Row style={{backgroundColor:"yellowgreen"}}>
            e
          </Row>
          <Row style={{backgroundColor:"coral"}}>
            f
          </Row> */}
        </Col>
      </Row>
      <Row style={{height:30,backgroundColor:"green"}}>
        c
      </Row>
    </>
  );
};
export default antdGridPrac;
