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
          <Link href='/'><a>HOME</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'><a>Profile</a></Link>
        </Menu.Item>
        <Menu.Item style={{ marginLeft:"50px"}}>
          <Search placeholder="input search text" allowClear  style={{ width: "30vw", verticalAlign:"middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signUp'><a>SignUp</a></Link>
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