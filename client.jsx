import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.jsx';
import Links from './Links';
import AppLayout from './components/Applayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </>,
  document.querySelector('#root')
);
