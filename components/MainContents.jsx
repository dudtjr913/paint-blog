import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

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
  const { contents } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'ADD',
    });
  }, []);
  const handleOnClick = useCallback(() => {
    dispatch({
      type: 'ADD',
    });
  }, []);
  return (
    <>
      <div style={{ marginTop: '20px' }}>
        <UlWrapper>
          {contents.map((v, i) => (
            <li key={i}>
              <div>
                <a href={v.href}>
                  <ImageWrapper src={v.imageSrc} />
                  <span className="title">{v.title}</span>
                </a>
              </div>
            </li>
          ))}
        </UlWrapper>
      </div>
      <button onClick={handleOnClick}>더보기</button>
    </>
  );
};

export default MainContents;
