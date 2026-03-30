import { CanActivate, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private authService: AuthService){}
    async canActivate(context : any) : Promise<boolean> {
        console.log('guard 실행됨');
        const request = context.switchToHttp().getRequest();
        const token = request.cookies.token;
console.log('cookies:', request.cookies);
        if(!token){
            return false;
        }

        try{
            const user  = await this.authService.verify(token);
            request.user = user;
            
        }catch(e){
            throw new UnauthorizedException('toekn check fail');
        }
        return true;
    }


}