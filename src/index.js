import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store/index';
import './index.css';
import routes from './router';

ReactDOM.render(
  <Router>
  <Provider store={store}>
    {routes}
  </Provider> 
  </Router>,
  document.getElementById('root')
);