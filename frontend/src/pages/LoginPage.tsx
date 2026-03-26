import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, error } from "../auth/authSlice";
import { isLogin } from "../auth/authService";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export const LoginPage = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['token']);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const data = await isLogin(id, password);
            console.log(data);
            if (data.result === 'success') {
                console.log("응답 받아왔고 성공!! my 이동하기 전");
               // const token = data.token;
               // dispatch(login({ id: id, token: token }));
                //setCookie('token', token, { path: '/', expires: new Date(Date.now() + 1000  * 60) }); //1분
                const token = data.token;
                dispatch(login({ id, token })); // 🔥 이거 필수
                navigate('/my');

               
            } else {
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
                setId('');
                setPassword('');
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-2xl shadow-md">

                <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-center text-sm text-muted-foreground mb-6">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} name="login" className="space-y-4">

                    <div className="space-y-1">
                        <label className="text-sm font-medium">ID</label>
                        <input
                            type="text"
                            placeholder="you"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition shadow-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition shadow-sm"
                        />
                    </div>

                    <button
                        aria-label="login"
                        type="submit"
                        className="
          w-full py-3
          rounded-xl
          font-bold text-lg tracking-wide text-black
          bg-emerald-500
          hover:bg-emerald-700
          focus:outline-none focus:ring-4 focus:ring-emerald-300
          shadow-lg hover:shadow-xl
        "
                    >
                        Sign In
                    </button>

                </form>
            </div>
        </div>
    )
}