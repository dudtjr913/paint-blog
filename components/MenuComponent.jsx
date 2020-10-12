import React, { useState, useCallback } from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const MenuComponent = () => {
  const [menu, setMenu] = useState(false);
  const handleOnClick = useCallback(() => {
    setMenu((prev) => !prev);
  }, []);
  const handleOnMenuClick = useCallback((e) => {
    console.log('clicked', e);
  }, []);
  return (
    <>
      <Button
        onClick={handleOnClick}
        style={{
          border: 'none',
          width: '5vw',
          height: '5vh',
          fontSize: '25px',
          textAlign: 'center',
        }}
      >
        <MenuOutlined />
      </Button>
      {menu && (
        <Menu
          style={{
            marginTop: '20px',
            textAlign: 'left',
            border: 'none',
          }}
          onClick={handleOnMenuClick}
          mode="inline"
        >
          <Menu.ItemGroup key="g1" title="Items1">
            <Menu.Item key="1">1</Menu.Item>
            <Menu.Item key="2">2</Menu.Item>
            <Menu.Item key="3">3</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Items2">
            <Menu.Item key="4">4</Menu.Item>
            <Menu.Item key="5">5</Menu.Item>
            <Menu.Item key="6">6</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3" title="Items3">
            <Menu.Item key="7">7</Menu.Item>
            <Menu.Item key="8">8</Menu.Item>
            <Menu.Item key="9">9</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      )}
    </>
  );
};

export default MenuComponent;
