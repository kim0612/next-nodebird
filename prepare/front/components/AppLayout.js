import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input } from 'antd';

const { Search } = Input

const AppLayout = ({children}) => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href='/'><a style={{fontSize:"2vw"}}>HOME</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'><a style={{fontSize:"2vw"}}>Profile</a></Link>
        </Menu.Item>
        <Menu.Item style={{ marginLeft:"20vw"}}>
          <Search placeholder="input search text" allowClear  style={{ width: "25vw", verticalAlign:"middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signIn'><a style={{fontSize:"2vw"}}>Sign In</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/signUp'><a style={{fontSize:"2vw",border:"solid 0.5px", borderRadius: '5px', padding: "5px"}}>Sign Up</a></Link>
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;