import React,{useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import authContext from '../../context/authentication/authContext';
import Login from '../pages/Login';

const ProtectedRoutes = () => {

    const AuthContext = useContext(authContext);
    const {authenticated} = AuthContext;

  return !authenticated? <Login />:<Outlet />
}

export default ProtectedRoutes