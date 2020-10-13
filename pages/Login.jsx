import React, { useEffect } from 'react';
import Applayout from '../components/Applayout';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';

const Login = ({ history }) => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (me) {
      history.push('/');
    }
  }, [me]);
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
