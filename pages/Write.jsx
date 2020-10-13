import React, { useState, useCallback } from 'react';
import WriteLayout from '../components/WriteLayout';
import { Input, Form } from 'antd';

const Write = ({ history }) => {
  const [title, setTitle] = useState(null);
  const [mainText, setMainText] = useState(null);

  const handleOnChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleOnChangeMainText = useCallback((e) => {
    setMainText(e.target.value);
  }, []);

  return (
    <WriteLayout history={history} title={title} mainText={mainText}>
      <Form style={{ width: '80%', margin: '0px auto' }}>
        <Input
          value={title}
          onChange={handleOnChangeTitle}
          placeholder="제목"
          bordered={false}
          style={{
            borderBottom: '1px solid lightgray',
            paddingTop: '30px',
            fontSize: '30px',
          }}
        />
        <Input.TextArea
          value={mainText}
          onChange={handleOnChangeMainText}
          placeholder="내용을 입력하세요."
          bordered={false}
          style={{ paddingTop: '30px', fontSize: '15px' }}
          autoSize={true}
        />
      </Form>
    </WriteLayout>
  );
};

export default Write;
