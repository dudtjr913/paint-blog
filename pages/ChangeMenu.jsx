import React, { useCallback, useState } from 'react';
import Applayout from '../components/Applayout';
import { Form, Button, Input, Tree, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

const ChangeMenu = () => {
  const { menuLists } = useSelector((state) => state.content);
  const [value, setValue] = useState('');
  const [form] = Form.useForm();
  const handleOnChange = useCallback((v) => {
    console.log(v.target.value);
  }, []);
  const categorySelect = useCallback((v) => {
    console.log(v);
    setValue(v.toString());
  }, []);
  const handleOnSubmit = useCallback((v) => {
    console.log(v.category);
  }, []);
  return (
    <Applayout>
      <Row style={{ marginTop: '200px' }}>
        <Col span={4}>
          <div>카테고리</div>
          <Tree treeData={menuLists} onSelect={categorySelect} />
        </Col>
        <Col span={20}>
          <Form form={form} onFinish={handleOnSubmit} name="contorl-category">
            <Form.Item
              name="category"
              label="카테고리명"
              wrapperCol={{ span: '6' }}
            >
              <Input value={value} onChange={handleOnChange} />
            </Form.Item>
            <Button htmlType="submit">확인</Button>
          </Form>
        </Col>
      </Row>
    </Applayout>
  );
};

export default ChangeMenu;
