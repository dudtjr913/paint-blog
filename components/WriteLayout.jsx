import React, { useCallback } from 'react';
import { Col, Row, Button, Form } from 'antd';
import {
  FileImageOutlined,
  VideoCameraOutlined,
  LinkOutlined,
  DownOutlined,
  BoldOutlined,
  UnderlineOutlined,
  ItalicOutlined,
  FontColorsOutlined,
  BgColorsOutlined,
  AlignLeftOutlined,
  LineHeightOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_CONTENT_REQUEST } from '../reducers/content';

const ButtonWrapper = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    color: skyblue;
  }
`;

const UlWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const HeaderWrapper = styled.header`
  padding: 5px 0px;
  min-height: 4vh;
  padding-bottom: 0px;
`;

const FormWrapper = styled(Form)`
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  padding-bottom: 5px;
`;

const WriteLayout = ({ children, title, mainText, history }) => {
  const dispatch = useDispatch();
  const handleOnSave = useCallback(() => {
    dispatch({
      type: ADD_CONTENT_REQUEST,
      data: {
        title,
        text: mainText,
      },
    });
    history.push('/');
  }, [title, mainText]);
  return (
    <>
      <HeaderWrapper>
        <FormWrapper onFinish={handleOnSave}>
          <Button>
            <Link to="/">홈</Link>
          </Button>
          <Button style={{ marginRight: '10px' }} htmlType="submit">
            저장
          </Button>
        </FormWrapper>
        <UlWrapper>
          <li>
            <ButtonWrapper>
              <FileImageOutlined style={{ fontSize: '25px' }} />
              <div>사진</div>
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <VideoCameraOutlined style={{ fontSize: '25px' }} />
              <div>동영상</div>
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <LinkOutlined style={{ fontSize: '25px' }} />
              <div>링크</div>
            </ButtonWrapper>
          </li>
        </UlWrapper>
        <UlWrapper>
          <li>
            <ButtonWrapper>
              <span>본문</span>
              <DownOutlined
                style={{
                  fontSize: '10px',
                  marginLeft: '10px',
                  color: 'lightgray',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <span>나눔고딕</span>
              <DownOutlined
                style={{
                  fontSize: '10px',
                  marginLeft: '10px',
                  color: 'lightgray',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <span>15</span>
              <DownOutlined
                style={{
                  fontSize: '10px',
                  marginLeft: '10px',
                  color: 'lightgray',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <BoldOutlined
                style={{
                  borderLeft: '1px solid lightgray',
                  fontSize: '15px',
                  paddingLeft: '15px',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <ItalicOutlined
                style={{
                  fontSize: '15px',
                  paddingLeft: '5px',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <UnderlineOutlined
                style={{
                  fontSize: '15px',
                  paddingLeft: '5px',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <FontColorsOutlined
                style={{
                  fontSize: '15px',
                  paddingLeft: '5px',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <BgColorsOutlined
                style={{
                  fontSize: '15px',
                  paddingLeft: '5px',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <AlignLeftOutlined
                style={{
                  fontSize: '15px',
                  paddingLeft: '10px',
                  borderLeft: '1px solid lightgray',
                }}
              />
            </ButtonWrapper>
          </li>
          <li>
            <ButtonWrapper>
              <LineHeightOutlined
                style={{
                  fontSize: '15px',
                  paddingLeft: '5px',
                }}
              />
            </ButtonWrapper>
          </li>
        </UlWrapper>
      </HeaderWrapper>
      <main style={{ margin: '0 auto', backgroundColor: 'whitesmoke' }}>
        <Row>
          <Col span={6}></Col>
          <Col
            span={12}
            style={{
              backgroundColor: 'white',
              minHeight: 'calc(100vh - 140.88px)',
            }}
          >
            {children}
          </Col>
          <Col span={6}></Col>
        </Row>
      </main>
    </>
  );
};

export default WriteLayout;
