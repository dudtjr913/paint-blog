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
  font-weight: 700;
  display: inline-block;
`;

const ProfileForm = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nicknameChange, setNicknameChange] = useState(false);
  const [emailChange, setEmailChange] = useState(false);
  const [phoneChange, setPhoneChange] = useState(false);
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

  const handleOnChange = useCallback((e) => {
    console.log(e.target.className);
    if (e.target.className === 'ant-btn nickname' || 'nickname') {
      if (e.target.textContent === '취소') {
        setNickname('');
        return setNicknameChange(false);
      }
      return setNicknameChange(true);
    }
    if (e.target.className === 'ant-btn email' || 'email') {
      if (e.target.textContent === '취소') {
        setEmail('');
        return setEmailChange(false);
      }
      return setEmailChange(true);
    }
    if (e.target.className === 'ant-btn phone' || 'phone') {
      if (e.target.textContent === '취소') {
        setPhone('');
        return setPhoneChange(false);
      }
      return setPhoneChange(true);
    }
  }, []);

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
                    textAlign: 'left',
                    paddingLeft: '10%',
                  }}
                >
                  <DTWrapper style={{ width: '40%' }}>게시글</DTWrapper>
                  <span>{contents.length}</span>
                  <div></div>
                  <DTWrapper style={{ width: '40%' }}>닉네임</DTWrapper>
                  {nicknameChange ? (
                    <Form>
                      <Input
                        placeholder="변경할 닉네임"
                        value={nickname}
                        onChange={changeNickname}
                      />
                      <Button
                        className="nickname"
                        style={{ float: 'right' }}
                        onClick={handleOnChange}
                      >
                        <span className="nickname">변경</span>
                      </Button>
                      <Button
                        className="nickname"
                        style={{ float: 'right' }}
                        onClick={handleOnChange}
                      >
                        <span className="nickname">취소</span>
                      </Button>
                    </Form>
                  ) : (
                    <>
                      <span>히밤</span>
                      <div>
                        <Button
                          className="nickname"
                          style={{ marginLeft: '40%' }}
                          onClick={handleOnChange}
                        >
                          <span className="nickname">수정</span>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              }
            />
          </CardLeft>
        </Col>
        <Col xs={24} md={12}>
          <CardRight title="내정보" style={{ fontSize: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <DTWrapper>이메일</DTWrapper>
              {emailChange ? (
                <Form>
                  <Input
                    placeholder="변경할 이메일"
                    value={email}
                    onChange={changeEmail}
                  />
                  <Button
                    className="email"
                    style={{ float: 'right' }}
                    onClick={handleOnChange}
                  >
                    변경
                  </Button>
                  <Button
                    className="email"
                    style={{ float: 'right' }}
                    onClick={handleOnChange}
                  >
                    취소
                  </Button>
                </Form>
              ) : (
                <>
                  <span>dudtjr913@naver.com</span>
                  <div>
                    <Button
                      className="email"
                      style={{ marginLeft: '30%' }}
                      onClick={handleOnChange}
                    >
                      수정
                    </Button>
                  </div>
                </>
              )}
              <DTWrapper>휴대전화</DTWrapper>
              {phoneChange ? (
                <Form>
                  <Input
                    placeholder="변경할 휴대전화"
                    value={phone}
                    onChange={changePhone}
                  />
                  <Button
                    className="phone"
                    style={{ float: 'right' }}
                    onClick={handleOnChange}
                  >
                    변경
                  </Button>
                  <Button
                    className="phone"
                    style={{ float: 'right' }}
                    onClick={handleOnChange}
                  >
                    취소
                  </Button>
                </Form>
              ) : (
                <>
                  <span>010-0000-0000</span>
                  <div>
                    <Button
                      className="phone"
                      style={{ marginLeft: '30%' }}
                      onClick={handleOnChange}
                    >
                      수정
                    </Button>
                  </div>
                </>
              )}
            </div>
          </CardRight>
        </Col>
      </RowWrapper>
    </section>
  );
};

export default ProfileForm;
