import React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const DropMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">홈</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">로그인</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">프로필</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/write">글쓰기</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button
        style={{
          borderRadius: '100%',
          padding: '0',
          width: '40px',
          height: '40px',
          fontSize: '18px',
        }}
      >
        <ProfileOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropMenu;
