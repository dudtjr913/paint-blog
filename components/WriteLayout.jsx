import React from 'react';
import { Col, Row, Button } from 'antd';
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

const AppLayout = ({ children }) => {
  return (
    <>
      <header style={{ padding: '5px 0px', minHeight: '4vh' }}>
        <div
          style={{
            borderBottom: '1px solid lightgray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0px 15px',
            paddingBottom: '5px',
          }}
        >
          <Button>홈</Button>
          <Button style={{ marginRight: '10px' }}>저장</Button>
        </div>
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
