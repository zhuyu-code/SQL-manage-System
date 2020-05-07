import React from 'react';

import {Route, Redirect} from 'react-router-dom';

import ProtectRoute from './protectRoute';
import mainRoute from './mainRoute';
import history from './util/history';

import Main from './application/Main';
import Login from './application/Login';
import Register from './application/Register';
export default (
    <div className="container">
        <Route exact path="/" render={()=>history.push('/main')} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <ProtectRoute path="/main" Component={mainRoute}/>
    </div>
)