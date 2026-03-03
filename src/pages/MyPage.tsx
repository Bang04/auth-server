import { logout } from "../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import { useCookies } from "react-cookie";

export const MyPage = () => {
   
     const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies] = useCookies(['token']);

    const token = useSelector((state: RootState) => state.auth.token);
  
    if(cookies.token === null){
         console.log('loggout 여기? ');
        navigate('/login');
    }
    const handlerLoggout = () => {
        console.log('loggout $$ ');
        dispatch(logout());
        navigate('/login');
    }
    return (
        <div>
            Main Page
            <button 
                onClick={() => handlerLoggout()}
            className="px-5 py-3 text-2xl font-extrabold text-white bg-gradient-to-r from-red-300 to-red-700 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200">
               🚪 로그아웃
            </button>
        </div>
    )
}