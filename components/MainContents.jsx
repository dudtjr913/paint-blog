import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { MORE_CONTENTS_REQUEST } from '../reducers/content';

const UlWrapper = styled.ul`
  list-style: none;
  margin-top: 30px;
  margin-bottom: 0px;
  padding: 0;
  li {
    max-width: 860px;
    margin: 5px auto;
  }
  @media screen and (min-width: 768px) {
    div {
      float: left;
      width: 25%;
      height: 200px;
      margin-bottom: 70px;
      padding: 0px 10px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      float: left;
      width: 50%;
      height: 200px;
      margin-bottom: 70px;
      padding: 0px 10px;
      text-align: center;
    }
  }
  div: hover {
    text-decoration: underline;
  }
  div > a {
    color: black;
  }
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
`;

const MainContents = () => {
  const { contents, hasMoreContents } = useSelector((state) => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MORE_CONTENTS_REQUEST,
    });
  }, []);

  const handleOnClick = useCallback(() => {
    dispatch({
      type: MORE_CONTENTS_REQUEST,
    });
  }, []);

  return (
    <>
      <div
        style={{
          marginTop: '20px',
          minHeight: '400px',
          height: '100%',
        }}
      >
        <UlWrapper>
          {contents.map((v, i) => (
            <li key={i}>
              <div>
                <Link to={`/view/${v.id}`}>
                  <ImageWrapper src={v.imageSrc} />
                  <span className="title">{v.title}</span>
                </Link>
              </div>
            </li>
          ))}
        </UlWrapper>
      </div>
      {hasMoreContents && (
        <Button
          style={{
            display: 'block',
            textAlign: 'center',
            width: '100px',
            height: '45px',
            fontSize: '18px',
            margin: '0 auto',
            marginBottom: '20px',
          }}
          onClick={handleOnClick}
        >
          더보기
        </Button>
      )}
    </>
  );
};

export default MainContents;
