import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "../auth/authSlice";

import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

 

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["user", "token"],
};

// persistReducer → reducer에 “저장 기능” 추가
// persistStore → persist 시작
// storage → localStorage 사용
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth : persistedReducer
    },
    //redux-persist 경고 방지 설정
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
