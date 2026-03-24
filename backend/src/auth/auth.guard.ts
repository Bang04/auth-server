import { CanActivate, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private authService: AuthService){}
    async canActivate(context : any) : Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        if(request.cookies['token']){
            return true;
        }


        if(!request.body.id || !request.body.passwrod){
            return false;
        }

        const user = await this.authService.isLogin(
            request.body.id,
            request.body.password,
        );

        if(!user){
            return false;
        }

        request.user = user;
        
        return true;
    }


}