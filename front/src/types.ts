export type AuthState = {
    isLogin: boolean;   //로그인 상태
    userInfo: any;      // 사용자 정보
    loading: boolean;   // 로딩 상태
    error: any;         // 에러
}

// export type loginInfo = { // mock data 
//     id : string | null,        // 사용자 아이디
//     password : string  | null   // 사용자 비밀번호
// }

// export type UserToken = {
//     userID : string,            //아이디
//     role : string,              //권한
//     exp : number                //만료시간
// }

export type authAction = 
    { type: "createToken"; payload: string } |
    { type: "setToken"; payload: string } |
    { type: "removeToken"; payload: string } |
    { type: "checkToken"; payload: string } 
;