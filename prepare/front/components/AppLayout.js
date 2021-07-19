import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input, Dropdown } from 'antd';
import Image from 'next/image';

const { Search } = Input

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

const AppLayout = ({children}) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
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

        {isLoggedin 
          ? 
            <Menu.Item style={{ marginLeft:"20vw"}}>
              <div style={{height:"46px"}}>
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Image src="/img/groot2.jpg" alt="profileImg" width="44" height="44" />
                  </a>
                </Dropdown>
              </div>
            </Menu.Item>
          :
            <>
              <Menu.Item>
                <Link href='/signIn'><a style={{fontSize:"2vw"}}>Sign In</a></Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/signUp'><a style={{fontSize:"2vw",border:"solid 0.5px", borderRadius: '5px', padding: "5px"}}>Sign Up</a></Link>
              </Menu.Item> 
            </>
        }
        
      </Menu>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;