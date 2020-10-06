import React from 'react';
import { Col, Row } from 'antd';
import MenuComponent from './MenuComponent';
import DropMenu from './DropMenu';

const AppLayout = ({ children }) => {
  return (
    <>
      <header
        style={{
          fontSize: '25px',
          height: '5vh',
          marginLeft: '30px',
          marginRight: '30px',
          paddingTop: '10px',
        }}
      >
        <Row>
          <Col span={4}>
            <MenuComponent />
          </Col>
          <Col style={{ textAlign: 'center' }} span={16}>
            main Title
          </Col>
          <Col style={{ textAlign: 'right' }} span={4}>
            <DropMenu />
          </Col>
        </Row>
      </header>
      <main>
        <Row>
          <Col span={4}></Col>
          <Col style={{ textAlign: 'center' }} span={16}>
            {children}
          </Col>
          <Col span={4}></Col>
        </Row>
      </main>
    </>
  );
};

export default AppLayout;
