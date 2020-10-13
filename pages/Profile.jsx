import React from 'react';
import Applayout from '../components/Applayout';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <Applayout>
      {me ? (
        <div>profile</div>
      ) : (
        <div
          style={{
            minHeight: 'calc(100vh - 48.44px)',
            textAlign: 'center',
            lineHeight: 'calc(100vh - 48.44px)',
            fontSize: '30px',
          }}
        >
          로그인을 해주세요.
        </div>
      )}
    </Applayout>
  );
};

export default Profile;
