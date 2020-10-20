import React, { useCallback, useState } from 'react';
import Applayout from '../components/Applayout';
import { Form, Button, Input, Row, Col, Tree } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {
  EDIT_CATEGORY_REQUEST,
  ADD_CATEGORY_REQUEST,
} from '../reducers/content';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: '100px',
  },
});

const EditCategory = () => {
  const { categoryLists } = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [id, setId] = useState('');
  const classes = useStyles();

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    dispatch({
      type: EDIT_CATEGORY_REQUEST,
      data: {
        id,
        value,
      },
    });
    setValue('');
    setId('');
  }, [value, id]);

  const handleOnSelected = useCallback((e, v) => {
    if (e.target.innerText === '카테고리 전체보기') {
      return setValue(''), setId('');
    }
    setValue(e.target.innerText);
    setId(v);
    console.log(v);
  }, []);

  const addCategory = useCallback(() => {
    dispatch({
      type: ADD_CATEGORY_REQUEST,
      data: id,
    });
  }, [id]);

  return (
    <Applayout>
      <Row style={{ marginTop: '200px' }}>
        <Col span={4}>
          <div>카테고리</div>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeSelect={handleOnSelected}
          >
            <TreeItem nodeId="whole" label="카테고리 전체보기" key="whole" />
            {categoryLists.map((v) => (
              <TreeItem nodeId={v.key} label={v.title} key={v.key}>
                {v.children.map((v) => (
                  <TreeItem nodeId={v.key} label={v.title} key={v.key} />
                ))}
              </TreeItem>
            ))}
          </TreeView>
          <Button onClick={addCategory}>추가</Button>
        </Col>
        <Col span={20}>
          <Form style={{ width: '20%' }} onFinish={handleOnSubmit}>
            <Input value={value} onChange={handleOnChange} />
            <Button
              style={{ display: 'block', float: 'right' }}
              htmlType="submit"
            >
              변경
            </Button>
          </Form>
        </Col>
      </Row>
    </Applayout>
  );
};

export default EditCategory;
