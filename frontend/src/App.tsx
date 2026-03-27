import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import type { RootState } from './app/store';
import { router } from './app/router';
import './App.css'
import { login, logout } from './auth/authSlice';


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

