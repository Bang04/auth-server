import { BrowserRouter, Route  ,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css'

import { Login } from './pages/Login';
import { MyPage } from './pages/MyPage';
import type { RootState } from './store';
function App() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <BrowserRouter>
      <Routes>
      {
        token && token !== null 
        ? <Route path='/' element={<MyPage />} /> 
        : <Route path='/' element={<Login />} />
      }
      </Routes>
    </BrowserRouter>)
}

export default App
