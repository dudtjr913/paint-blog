import React, { useCallback, useState } from 'react';
import { Card, Avatar, Button, Row, Col, Input, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  CHANGE_NICKNAME_REQUEST,
  CHANGE_EMAIL_REQUEST,
  CHANGE_PHONE_REQUEST,
  CLICK_CHANGE_EMAIL,
  CLICK_CHANGE_NICKNAME,
  CLICK_CHANGE_PHONE,
} from '../reducers/user';

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
  const { contents } = useSelector((state) => state.content);
  const {
    me,
    changeNicknameLoading,
    changeEmailLoading,
    changePhoneLoading,
    clickChangeNickname,
    clickChangeEmail,
    clickChangePhone,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    if (
      e.target.className === 'ant-btn nickname' ||
      e.target.className === 'nickname'
    ) {
      if (e.target.textContent === '취소') {
        setNickname('');
        dispatch({
          type: CLICK_CHANGE_NICKNAME,
          data: false,
        });
      } else {
        dispatch({
          type: CLICK_CHANGE_NICKNAME,
          data: true,
        });
      }
    }
    if (
      e.target.className === 'ant-btn email' ||
      e.target.className === 'email'
    ) {
      if (e.target.textContent === '취소') {
        setEmail('');
        dispatch({
          type: CLICK_CHANGE_EMAIL,
          data: false,
        });
      } else {
        dispatch({
          type: CLICK_CHANGE_EMAIL,
          data: true,
        });
      }
    }
    if (
      e.target.className === 'ant-btn phone' ||
      e.target.className === 'phone'
    ) {
      if (e.target.textContent === '취소') {
        setPhone('');
        dispatch({
          type: CLICK_CHANGE_PHONE,
          data: false,
        });
      } else {
        dispatch({
          type: CLICK_CHANGE_PHONE,
          data: true,
        });
      }
    }
  }, []);

  const changeNicknameSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
    setNickname('');
  }, [nickname]);

  const changeEmailSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_EMAIL_REQUEST,
      data: email,
    });
    setEmail('');
  }, [email]);

  const changePhoneSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_PHONE_REQUEST,
      data: phone,
    });
    setPhone('');
  }, [phone]);

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
                  {clickChangeNickname ? (
                    <>
                      <span>{me.nickname}</span>
                      <Form onFinish={changeNicknameSubmit}>
                        <Input
                          placeholder="변경할 닉네임"
                          value={nickname}
                          onChange={changeNickname}
                        />
                        <Button
                          className="nickname"
                          style={{ float: 'right' }}
                          htmlType="submit"
                          loading={changeNicknameLoading}
                        >
                          변경
                        </Button>
                        <Button
                          className="nickname"
                          style={{ float: 'right' }}
                          onClick={handleOnChange}
                        >
                          <span className="nickname">취소</span>
                        </Button>
                      </Form>
                    </>
                  ) : (
                    <>
                      <span>{me.nickname}</span>
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
              {clickChangeEmail ? (
                <>
                  <span>{me.email}</span>
                  <Form onFinish={changeEmailSubmit}>
                    <Input
                      placeholder="변경할 이메일"
                      value={email}
                      onChange={changeEmail}
                      type="email"
                      style={{ marginLeft: '30%', width: '70%' }}
                    />
                    <Button
                      className="email"
                      style={{ float: 'right' }}
                      htmlType="submit"
                      loading={changeEmailLoading}
                    >
                      변경
                    </Button>
                    <Button
                      className="email"
                      style={{ float: 'right' }}
                      onClick={handleOnChange}
                    >
                      <span className="email">취소</span>
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <span>{me.email}</span>
                  <div>
                    <Button
                      className="email"
                      style={{ marginLeft: '30%' }}
                      onClick={handleOnChange}
                    >
                      <span className="email">수정</span>
                    </Button>
                  </div>
                </>
              )}
              <DTWrapper>휴대전화</DTWrapper>
              {clickChangePhone ? (
                <>
                  <span>{me.phone}</span>
                  <Form onFinish={changePhoneSubmit}>
                    <Input
                      placeholder="변경할 휴대전화"
                      value={phone}
                      onChange={changePhone}
                      style={{ marginLeft: '30%', width: '70%' }}
                    />
                    <Button
                      className="phone"
                      style={{ float: 'right' }}
                      htmlType="submit"
                      loading={changePhoneLoading}
                    >
                      변경
                    </Button>
                    <Button
                      className="phone"
                      style={{ float: 'right' }}
                      onClick={handleOnChange}
                    >
                      <span className="phone">취소</span>
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <span>{me.phone}</span>
                  <div>
                    <Button
                      className="phone"
                      style={{ marginLeft: '30%' }}
                      onClick={handleOnChange}
                    >
                      <span className="phone">수정</span>
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
