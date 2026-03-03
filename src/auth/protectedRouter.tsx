import React, { type JSX } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { LoginPage } from "../pages/LoginPage";


export const ProtectedRoute = ({ children} : {children : JSX.Element}) => {
 const token = useSelector((state: RootState) => state.auth.token);
   
 if(!token){
        return <LoginPage />;
    }
    return children;
}