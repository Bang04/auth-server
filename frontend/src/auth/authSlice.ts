import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type userInfoState = {
    isLogin : boolean;
    user: string | null;
}

export const initialState : userInfoState = { 
    isLogin : false,
    user :  null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action : PayloadAction<{id : string}>) => {
            state.isLogin = true;
            state.user = action.payload.id;
        },
        logout : (state) => {
            state.isLogin = false;
            state.user = null;
        },
    }

});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;