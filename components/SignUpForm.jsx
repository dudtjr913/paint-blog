import React from 'react';
import styled from 'styled-components';
import { Form, Input, Checkbox, Select } from 'antd';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <Form>
      <Input placeholder="아이디" />
      <Input.Password placeholder="비밀번호" />
      <Input.Password placeholder="비밀번호 확인" />
      <Input placeholder="닉네임" />
      <Input placeholder="이메일" />
      <Input.Group compact>
        <Select defaultValue="010">
          <Select.Option value="010">010</Select.Option>
          <Select.Option value="011">011</Select.Option>
          <Select.Option value="017">017</Select.Option>
        </Select>
        <Input placeholder="핸드폰" style={{ width: '70px' }} />
        <Input placeholder="번호" style={{ width: '70px' }} />
      </Input.Group>
    </Form>
  );
};

export default SignUpForm;
