import http from './http';

//注册请求
export const getRegister=(params)=>http.post('/register',params);
//登录请求
export const login=(params)=>http.get('/login',params);