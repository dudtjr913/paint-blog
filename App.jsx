import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import Home from './Home.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

const store = createStore(reducers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );
};

store.subscribe(render);
render();
