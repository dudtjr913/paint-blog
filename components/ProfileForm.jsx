import React, { useCallback, useState } from 'react';
import { Card, Avatar, Button, Row, Col, Input, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
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
  bottom: 20px;
  width: 60px;
  padding: 0px;
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

const DTWrapper = styled.dt`
  width: 30%;
  float: left;
  font-weight: 700;
`;

const ProfileForm = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileChange, setProfileChange] = useState(false);
  const [myInfChange, setMyInfChange] = useState(false);
  const { contents } = useSelector((state) => state.content);
  const { me } = useSelector((state) => state.user);

  const changeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePhone = useCallback((e) => {
    setPhone(e.target.value);
  }, []);

  const handleOnChangeProfile = useCallback((e) => {
    if (e.target.textContent === '취소') {
      setNickname('');
      return setProfileChange(false);
    }
    return setProfileChange(true);
  }, []);

  const handleOnChangeMyInf = useCallback((e) => {
    if (e.target.textContent === '취소') {
      setEmail('');
      setPhone('');
      return setMyInfChange(false);
    }
    return setMyInfChange(true);
  }, []);

  const changeProfileSubmit = useCallback(() => {
    console.log(nickname);
    setProfileChange(false);
    setNickname('');
  }, [nickname]);

  const changeMyInfSubmit = useCallback(() => {
    console.log(email, phone);
    setMyInfChange(false);
    setEmail('');
    setPhone('');
  }, [email, phone]);

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
                    paddingLeft: '10%',
                    textAlign: 'left',
                  }}
                >
                  <DTWrapper>게시글</DTWrapper>
                  <dd>{contents.length}</dd>
                  {profileChange ? (
                    <Form onFinish={changeProfileSubmit}>
                      <Input
                        placeholder="변경할 닉네임"
                        onChange={changeNickname}
                        value={nickname}
                        style={{ width: '40%' }}
                      />
                      <Button htmlType="submit">변경</Button>
                    </Form>
                  ) : (
                    <>
                      <DTWrapper>닉네임</DTWrapper>
                      <dd>히밤</dd>
                    </>
                  )}
                </div>
              }
            />
            <ButtonWrapper>
              <div
                onClick={handleOnChangeProfile}
                style={{ height: '32px', lineHeight: '32px' }}
              >
                {profileChange ? '취소' : '수정'}
              </div>
            </ButtonWrapper>
          </CardLeft>
        </Col>
        <Col xs={24} md={12}>
          <CardRight title="내정보" style={{ fontSize: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <DTWrapper>이메일</DTWrapper>
              {myInfChange ? (
                <Form onFinish={changeMyInfSubmit}>
                  <Input
                    onChange={changeEmail}
                    value={email}
                    placeholder="변경할 이메일"
                    style={{ width: '40%' }}
                  />
                  <Button htmlType="submit">변경</Button>
                </Form>
              ) : (
                <dd>dudtjr913@naver.com</dd>
              )}
              <DTWrapper>휴대전화</DTWrapper>
              {myInfChange ? (
                <Form onFinish={changeMyInfSubmit}>
                  <Input
                    onChange={changePhone}
                    value={phone}
                    placeholder="변경할 휴대전화"
                    style={{ width: '40%' }}
                  />
                  <Button htmlType="submit">변경</Button>
                </Form>
              ) : (
                <dd>010-0000-0000</dd>
              )}
            </div>
            <ButtonWrapper>
              <div
                onClick={handleOnChangeMyInf}
                style={{ height: '32px', lineHeight: '32px' }}
              >
                {myInfChange ? '취소' : '수정'}
              </div>
            </ButtonWrapper>
          </CardRight>
        </Col>
      </RowWrapper>
    </section>
  );
};

export default ProfileForm;
