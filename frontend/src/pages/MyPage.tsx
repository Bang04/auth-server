import { logout } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { persistor, type RootState } from "../app/store";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyPage = () => {
    const navigator = useNavigate();
    const [userId2 , setUserId] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/auth/my', {
                credentials: 'include',
            });

            if(!res.ok){
                console.log(res.statusText + ' : 토큰 없음');
                  navigator('/login');
                  return;
            }

           // const data = await res.json();
           // setUserId(data.id);
        };

        fetchData();
    }, [navigator]);











    const dispatch = useDispatch();
    //const navigate = useNavigate();

    localStorage.getItem("persist:auth")
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const userId = useSelector((state: RootState) => state.auth.user);
    if (cookies.token === null) {
        // navigate('/login');
    }
    const handlerLogout = () => {
        removeCookie('token');
        dispatch(logout());
        persistor.purge();
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl text-center space-y-6">

                <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                    My Page
                </h1>

                <h2 className="text-xl text-gray-600">
                    <span className="font-semibold text-blue-600">
                        {userId}
                    </span>
                    님 환영합니다 👋
                </h2>

                <div className="pt-4">
                    <button
                        onClick={() => handlerLogout()}
                        className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-red-400 to-red-600 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                        🚪 로그아웃
                    </button>
                </div>

            </div>
        </div>
    )
}