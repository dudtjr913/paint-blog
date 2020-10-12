import React from 'react';
import Applayout from '../components/Applayout';

const View = ({ match }) => {
  return (
    <Applayout>
      <div>{match.params.data}</div>
    </Applayout>
  );
};

export default View;
