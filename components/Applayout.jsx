import React from 'react';
import { Col, Row } from 'antd';
import MenuComponent from './MenuComponent';
import DropMenu from './DropMenu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  font-size: 25px;
  height: 5vh;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 10px;
  @media screen and (max-width: 1180px) {
    margin: 0px;
  }
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <HeaderWrapper>
        <Row style={{ position: 'static' }}>
          <Col xs={3}>
            <MenuComponent />
          </Col>
          <Col xs={18} style={{ textAlign: 'center' }}>
            <Link to="/" style={{ color: 'black' }}>
              그림 블로그
            </Link>
          </Col>
          <Col xs={3} style={{ textAlign: 'right' }}>
            <DropMenu />
          </Col>
        </Row>
      </HeaderWrapper>
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
