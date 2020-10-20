import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Write from './pages/Write';
import View from './pages/View';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import EditCategory from './pages/EditCategory';
import configureStore from './store/configureStore';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/write" component={Write} />
        <Route path="/view/:data" component={View} />
        <Route path="/signup" component={SignUp} />
        <Route path="/editcategory" component={EditCategory} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
