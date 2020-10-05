import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Nav from './nav';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Route exact path="/app">
      <App />
    </Route>
  </BrowserRouter>,
  document.querySelector('#root')
);
