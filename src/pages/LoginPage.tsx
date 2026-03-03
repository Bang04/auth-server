import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, error } from "../auth/authSlice";
import { createToken, isLogin } from "../auth/AuthService";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export const LoginPage = () => {


    const dispatch = useDispatch();
    const navigator = useNavigate();
    const [cookies, setCookie] = useCookies(['token']);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = isLogin(id, password);
        if (result) {
            const token = createToken(id, password);
            dispatch(login({ id: id, token: token }));
            setCookie('token', token, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 1) });
            navigator('/my');
        } else {
            alert('login falil');
            setId('');
            setPassword('');
        }
    }
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
            <p className="text-center text-sm text-muted-foreground mb-6">
                Login to your account
            </p>


            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium">ID</label>
                    <input
                        type="id"
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
                    type="submit"
                    className="
                        w-full py-3
                        rounded-xl
                        font-bold text-lg tracking-wide text-black
                        hover:bg-emerald-700
                        focus:outline-none focus:ring-4 focus:ring-emerald-300
                        shadow-lg hover:shadow-xl
                    "
                > Sign In
                </button>
            </form>
        </div>
    )
}