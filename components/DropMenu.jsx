import React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';

const DropMenu = () => {
  const menu = (
    <Menu>
      <Menu.Item>1</Menu.Item>
      <Menu.Item>2</Menu.Item>
      <Menu.Item>3</Menu.Item>
      <Menu.Item>4</Menu.Item>
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
