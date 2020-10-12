import React from 'react';
import WriteLayout from '../components/WriteLayout';
import { Input, Form } from 'antd';

const Write = () => {
  return (
    <WriteLayout>
      <Form>
        <Input placeholder="제목을 입력하세요." />
        <Input.TextArea placeholder="내용을 입력하세요." />
      </Form>
    </WriteLayout>
  );
};

export default Write;
