import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    isLogin(id : string, password : string): boolean{
        if(id === "test" && password === "1234"){
            return true;
        }
        return false;
    }
}
