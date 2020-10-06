import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/app">App</Link>
      </li>
    </ul>
  );
};

export default hot(Nav);
