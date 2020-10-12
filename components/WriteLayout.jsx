import React from 'react';
import { Col, Row, Button } from 'antd';
import {
  FileImageOutlined,
  VideoCameraOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

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

const AppLayout = ({ children }) => {
  return (
    <>
      <header style={{ margin: '5px 15px', minHeight: '4vh' }}>
        <div
          style={{
            borderBottom: '1px solid lightgray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '5px',
          }}
        >
          <Button>홈</Button>
          <Button style={{ marginRight: '10px' }}>저장</Button>
        </div>
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
            marginTop: '10px',
            display: 'flex',
            borderBottom: '1px solid lightgray',
          }}
        >
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
        </ul>
      </header>
      <main style={{ margin: '0 auto' }}>
        <Row>
          <Col style={{ position: 'static' }} xs={3}></Col>
          <Col xs={18}>{children}</Col>
          <Col xs={3}></Col>
        </Row>
      </main>
    </>
  );
};

export default AppLayout;
