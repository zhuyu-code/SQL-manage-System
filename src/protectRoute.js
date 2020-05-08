import React from 'react'
import { Route, Redirect } from 'react-router-dom';
function ProtectRoute(props) {
    const { Component, path } = props;
    // 判断是否登录
    return (
        <Route
            {...props}
            render={(props) =>
                localStorage.getItem('token') ?
                    <Component /> : 
                    <Redirect to={      
                        {
                            pathname: '/login',
                            state: { from: props.location.pathname } //多传一个状态
                        }
                    } />
            } />
    )
}
export default ProtectRoute
