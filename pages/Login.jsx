import React from 'react';
import Applayout from '../components/Applayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Applayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '95vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoginForm />
      </div>
    </Applayout>
  );
};

export default Login;
