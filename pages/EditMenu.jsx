import React, { useCallback, useState } from 'react';
import Applayout from '../components/Applayout';
import { Form, Button, Input, Row, Col, Tree } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { EDIT_CATEGORY_REQUEST } from '../reducers/content';

const EditMenu = () => {
  const { menuLists } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  const handleOnSelected = useCallback((e, v) => {
    console.log(v);
  }, []);

  return (
    <Applayout>
      <Row style={{ marginTop: '200px' }}>
        <Col span={4}>
          <div>카테고리</div>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeSelect={handleOnSelected}
          >
            {menuLists.map((v) => (
              <TreeItem nodeId={v.key} label={v.title} key={v.key}>
                {v.children.map((v) => (
                  <TreeItem nodeId={v.key} label={v.title} key={v.key} />
                ))}
              </TreeItem>
            ))}
          </TreeView>
        </Col>
        <Col span={20}>
          <Form onFinish={handleOnSubmit}>
            <Input value={value} onChange={handleOnChange} />
            <Button htmlType="submit">확인</Button>
          </Form>
        </Col>
      </Row>
    </Applayout>
  );
};

export default EditMenu;
