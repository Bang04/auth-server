import React, { type JSX } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children} : {children : JSX.Element}) => {
    const isLogin = useSelector((state: RootState) => state.auth.isLogin);
   
    if(!isLogin){
        return <Navigate to = "/login"/>;
    }

    return children;
}