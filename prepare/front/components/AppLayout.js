import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Image from 'next/image';
import { Menu, Input, Dropdown, Button } from 'antd';
import {TwitterOutlined} from '@ant-design/icons';
import {useSelector, useDispatch} from "react-redux"

import { logoutRequestAction } from '../reducers/user';

const { Search } = Input

const dropDownMenu = (logoutLoading, dispatch)=>{
  return (
    <Menu>
      <Menu.Item key="0">
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider key="2"/>
      <Menu.Item key="3">
        <Button loading={logoutLoading} onClick={()=>{dispatch(logoutRequestAction)}}>LOG OUT</Button>
      </Menu.Item>
    </Menu>
  );
};

const AppLayout = ({children}) => {
  const isLoggedin = useSelector((state)=>state.user.isLoggedin);
  const { logoutLoading } = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href='/'>
            <a style={{fontSize:"2vw"}}>
              <TwitterOutlined style={{fontSize: '21px', width:'40px', paddingLeft:'10px'}} />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item style={{ marginLeft:"20vw"}}>
          <Search placeholder="input search text" allowClear  style={{ width: "25vw", verticalAlign:"middle" }} />
        </Menu.Item>

        {isLoggedin
          ? 
            <>
              <Menu.Item style={{ marginLeft:"20vw"}}>
                <div style={{height:"46px"}}>
                  <Dropdown overlay={dropDownMenu(logoutLoading, dispatch)}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      <Image src="/img/groot2.jpg" alt="profileImg" width="44" height="44" />
                    </a>
                  </Dropdown>
                </div>
              </Menu.Item>
            </>
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