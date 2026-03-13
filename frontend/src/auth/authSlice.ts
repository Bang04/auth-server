import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type userInfoState = {
    token : string | null;
    user: string | null;
    error: any;
}

export const initialState : userInfoState = { 
    token : null,
    user :  null,
    error : null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action : PayloadAction<{id : string , token: string}>) => {
            state.token = action.payload.token;
            state.user = action.payload.id;
        },
        logout : (state) => {
            state.token = null;
            state.user = null;
        },
        error : (state, action) => {
            state.error = action.payload;
        }
    }

});

export const {login, logout, error} = authSlice.actions;
export default authSlice.reducer;