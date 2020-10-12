import React, { useCallback, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: flex;
  height: 30%;
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 30px 0px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  margin: 10px 0px;
  background-color: lightgray;
  cursor: pointer;
  border: none;
  :hover {
    border: 1px solid black;
  }
  :focus {
    outline: none;
    border: 1px solid black;
  }
`;

const LoginForm = () => {
  const [checked, setChecked] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleOnId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const handleOnPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const handleOnRemember = useCallback((e) => {
    setChecked(e.target.checked);
  }, []);
  const handleOnClick = useCallback((e) => {
    console.log(e.target);
  }, []);
  const handleOnSubmit = useCallback(() => {
    console.log(id, password);
  }, [id, password]);
  return (
    <MainWrapper>
      <div style={{ fontSize: '24px', marginBottom: '30px' }}>
        로그인을 해주세요
      </div>
      <Form onFinish={handleOnSubmit} style={{ width: '80%' }}>
        <Input
          bordered={false}
          style={{ height: '50px', border: '1px solid lightgray' }}
          placeholder="아이디를 입력해주세요."
          onChange={handleOnId}
          value={id}
        />
        <Input.Password
          bordered={false}
          style={{ height: '50px', border: '1px solid lightgray' }}
          placeholder="비밀번호를 입력해주세요."
          onChange={handleOnPassword}
          value={password}
        />
        <LoginButton onClick={handleOnClick} type="submit">
          로그인
        </LoginButton>
        <Checkbox
          style={{ userSelect: 'none', marginBottom: '10px' }}
          name="remember"
          onChange={handleOnRemember}
          checked={checked}
        >
          로그인 유지
        </Checkbox>
        <div>
          <div style={{ display: 'inline-block', float: 'left' }}>
            <Link to="findUser" style={{ color: 'black' }}>
              아이디/비밀번호 찾기
            </Link>
          </div>
          <div style={{ display: 'inline-block', float: 'right' }}>
            <Link to="signup" style={{ color: 'black' }}>
              회원가입
            </Link>
          </div>
        </div>
      </Form>
    </MainWrapper>
  );
};

export default LoginForm;
