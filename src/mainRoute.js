import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './application/Main'

export default ()=>{
    return (
        <div>
            <Switch>
                <Route path="/main" component={Main}/>
            </Switch>
        </div>
    )
}