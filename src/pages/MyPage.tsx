import { logout } from "../slice/authSlice";
import { useDispatch } from "react-redux";

export const MyPage = () => {
   
     const dispatch = useDispatch();

    const handlerLoggout = () => {
        dispatch(logout());
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