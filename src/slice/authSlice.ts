import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export type AuthState = {
    token : string | null;
    userId: string | null;
    error: any;
}

export const initialState : AuthState = { 
    token : null,
    userId :  null,
    error : null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action : PayloadAction<{id : string , token: string}>) => {
            state.token = action.payload.id;
            state.userId = action.payload.token;
        },
        logout : (state) => {
            state.token = null;
            state.userId = null;
        },
        error : (state, action) => {
            state.error = action.payload;
        }
    }

});

export const {login, logout, error} = authSlice.actions;
export default authSlice.reducer;