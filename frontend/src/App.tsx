import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import type { RootState } from './app/store';
import  {router} from './app/router';
 import './App.css'

function App() {
  //const dispatch = useDispatch();
   const token = useSelector((state: RootState) => state.auth.token);
  // console.log('token : ',token);
  //임시 토큰 값 만료시간 체크해서 로그아웃하기
  useEffect(() => {
    // if(token){
    //   const expired = localStorage.getItem('token')[1];
    //   const isExpired = new Date(expired) < new Date();
    //   if(expired){
    //     dispatch(logout());
    //   }
    // }
  }, [token]);
  

  return (
      <RouterProvider router={router} />
    )
}

export default App

