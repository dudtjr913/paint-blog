import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import AppLayout from './components/Applayout';
import styled from 'styled-components';

const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px;
  padding: 0;
  li {
    margin: 5px 5px auto;
  }
`;
const LgScreenImg = styled.img`
  width: 200px;
  height: 200px;
`;
const SmScreenImg = styled.img`
  width: 275px;
  height: 275px;
`;

const Home = () => {
  const [smScreen, setSmScreen] = useState(false);
  useEffect(() => {
    const handleOnResize = (e) => {
      if (e.target.innerWidth < 840) {
        setSmScreen(true);
      } else {
        setSmScreen(false);
      }
    };
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, [smScreen]);
  return (
    <AppLayout>
      <div style={{ marginTop: '20px' }}>
        <UlWrapper>
          <li>{smScreen ? <SmScreenImg /> : <LgScreenImg />}</li>
          <li>{smScreen ? <SmScreenImg /> : <LgScreenImg />}</li>
          <li>{smScreen ? <SmScreenImg /> : <LgScreenImg />}</li>
          <li>{smScreen ? <SmScreenImg /> : <LgScreenImg />}</li>
          <li>{smScreen ? <SmScreenImg /> : <LgScreenImg />}</li>
          <li>{smScreen ? <SmScreenImg /> : <LgScreenImg />}</li>
        </UlWrapper>
      </div>
    </AppLayout>
  );
};

export default hot(Home);
