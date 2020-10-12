import React from 'react';
import { hot } from 'react-hot-loader/root';
import AppLayout from '../components/Applayout';
import MainContents from '../components/MainContents';

const Home = () => {
  return (
    <AppLayout>
      <MainContents />
    </AppLayout>
  );
};

export default hot(Home);
