import React from 'react';
import { Card, Avatar, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const RowWrapper = styled(Row)`
  min-height: calc(100vh - 48.44px);
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    min-height: calc(60vh - 48.44px);
    transform: translateY(20vh);
  }
`;

const ButtonWrapper = styled(Button)`
  position: absolute;
  left: 24px;
  margin-top: 60px;
`;

const CardLeft = styled(Card)`
  @media screen and (min-width: 1000px) {
    width: 465px;
    height: 250px;
    float: right;
  }
  width: 100%;
  height: 250px;
  float: right;
`;

const CardRight = styled(Card)`
  @media screen and (min-width: 1000px) {
    width: 465px;
    height: 250px;
  }
  width: 100%;
  height: 250px;
`;

const ProfileForm = () => {
  const { contents } = useSelector((state) => state.content);
  const { me } = useSelector((state) => state.user);
  return (
    <section>
      <RowWrapper gutter={16}>
        <Col xs={24} md={12}>
          <CardLeft title="프로필">
            <Card.Meta
              avatar={<Avatar icon={<UserOutlined />} size={60} />}
              title={
                <div
                  style={{
                    paddingLeft: '30%',
                    textAlign: 'left',
                  }}
                >
                  <div>게시글 : {contents.length}</div>
                  <div>닉네임 : {<span>히밤</span>}</div>
                </div>
              }
            />
            <ButtonWrapper>수정</ButtonWrapper>
          </CardLeft>
        </Col>
        <Col xs={24} md={12}>
          <CardRight title="내정보" style={{ fontSize: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ width: '64px' }}>
                이메일
                <span>dudtjr913@naver.com</span>
              </span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ width: '64px' }}>
                휴대전화
                <span>010-0000-0000</span>
              </span>
            </div>
            <ButtonWrapper>수정</ButtonWrapper>
          </CardRight>
        </Col>
      </RowWrapper>
    </section>
  );
};

export default ProfileForm;
