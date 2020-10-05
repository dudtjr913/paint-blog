import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link } from 'react-router-dom';

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
