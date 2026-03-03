import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import type { RootState } from './app/store';
import { useCookies } from 'react-cookie';
import  {router} from './app/router';
 import './App.css'

function App() {

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
  
  }, [token]);
  

  return (
      <RouterProvider router={router} />
    )
}

export default App
