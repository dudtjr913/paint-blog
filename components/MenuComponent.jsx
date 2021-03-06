import React, { useState, useCallback } from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  const [menu, setMenu] = useState(false);
  const { categoryLists } = useSelector((state) => state.content);
  const { me } = useSelector((state) => state.user);
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
          {categoryLists.map((v) => (
            <Menu.ItemGroup key={v.key} title={v.title}>
              {v.children.map((v) => (
                <Menu.Item key={v.key}>{v.title}</Menu.Item>
              ))}
            </Menu.ItemGroup>
          ))}
        </Menu>
      )}
      {menu && me && (
        <Button style={{ marginLeft: '10%' }}>
          <Link to="/editcategory">수정</Link>
        </Button>
      )}
    </>
  );
};

export default MenuComponent;
