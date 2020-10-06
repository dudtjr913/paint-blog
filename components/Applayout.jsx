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
          <Col span={6}>
            <MenuComponent />
          </Col>
          <Col style={{ textAlign: 'center' }} span={12}>
            main Title
          </Col>
          <Col style={{ textAlign: 'right' }} span={6}>
            <DropMenu />
          </Col>
        </Row>
      </header>
      <main style={{ margin: '0 auto' }}>
        <Row>
          <Col></Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            {children}
          </Col>
          <Col></Col>
        </Row>
      </main>
    </>
  );
};

export default AppLayout;
