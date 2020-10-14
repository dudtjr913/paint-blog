import React from 'react';
import { Card, Avatar, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const ProfileForm = () => {
  const { contents } = useSelector((state) => state.content);
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 48.44px)',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Col xs={24} md={12}>
        <Card
          title="프로필"
          style={{
            width: '20vw',
            height: '250px',
            float: 'left',
          }}
        >
          <Card.Meta
            avatar={<Avatar icon={<UserOutlined />} size={60} />}
            title={
              <div>
                <div>게시글 : {contents.length}</div>
                <div>닉네임 : {<span>히밤</span>}</div>
              </div>
            }
          />
          <Button
            style={{ position: 'absolute', left: '24px', marginTop: '60px' }}
          >
            수정
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card title="내정보" style={{ width: '20vw', height: '250px' }}>
          <div>이메일</div>
          <div>전화번호</div>
          <Button
            style={{ position: 'absolute', left: '24px', marginTop: '60px' }}
          >
            수정
          </Button>
        </Card>
      </Col>
    </section>
  );
};

export default ProfileForm;
