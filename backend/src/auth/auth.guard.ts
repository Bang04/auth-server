import { CanActivate, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private authService: AuthService){}
    async canActivate(context : any) : Promise<boolean> {
        console.log('guard 실행됨');
        const request = context.switchToHttp().getRequest();
       // const token = request.cookies.token;
        const headers = request.headers;
        const token = headers['cookie']?.split(';')[0]?.split('=')[1];
                console.log('Gurad token : ',token);
        if(!token){
           throw new UnauthorizedException();
        }
        return true;
    }


}