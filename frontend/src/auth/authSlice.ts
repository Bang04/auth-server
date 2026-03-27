import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type userInfoState = {
    isLogin : boolean;
    user: string | null;
    error: any;
}

export const initialState : userInfoState = { 
    isLogin : false,
    user :  null,
    error : null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action : PayloadAction<{id : string , token: string}>) => {
          console.log(" authslice login : ",action.payload);
            state.isLogin = true;
            state.user = action.payload.id;
        },
        logout : (state) => {
            state.isLogin = false;
            state.user = null;
        },
        error : (state, action) => {
            state.error = action.payload;
        },
    }

});

export const {login, logout, error} = authSlice.actions;
export default authSlice.reducer;