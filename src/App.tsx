import { BrowserRouter, Route  ,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css'

import { Login } from './pages/Login';
import { MyPage } from './pages/MyPage';
import type { RootState } from './store';
import { useCookies } from 'react-cookie';
function App() {
  //const token = useSelector((state: RootState) => state.auth.token);
   const [cookies] = useCookies(['token']);
    console.log('cookies token : ### ',cookies.token);
   const token = useSelector((state: RootState) => state.auth.token);

   console.log('redux token : **** ',token);
  return (
    <BrowserRouter>
      <Routes>
      { token
        ? <Route path='/my' element={<MyPage />} /> 
        : <Route path='/login' element={<Login />} />
      }
      </Routes>
    </BrowserRouter>)
}

export default App
