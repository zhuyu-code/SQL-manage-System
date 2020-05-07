import React from 'react'
import { Route, Redirect } from 'react-router-dom';
function ProtectRoute(props) {
    const { Component } = props;
    // 判断是否登录
    return (
        <Route
            {...props}
            render={() =>
                localStorage.getItem('userInfo') ?
                    <Component /> : 
                    <Redirect to={      
                        {
                            pathname: '/login',
                        }
                    } />
            } />
    )
}
export default ProtectRoute
