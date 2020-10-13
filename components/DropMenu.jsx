import React, { useCallback } from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const DropMenu = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleOnLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">홈</Link>
      </Menu.Item>
      <Menu.Item>
        {me ? (
          <span onClick={handleOnLogOut}>로그아웃</span>
        ) : (
          <Link to="/login">로그인</Link>
        )}
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
