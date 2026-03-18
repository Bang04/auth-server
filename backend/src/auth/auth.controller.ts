import { Controller, Get , Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
    @Post('login')
    login(@Body() body: any) {
        return this.authService.isLogin(body.id, body.password);
    }

    getAccessToekn(@Body() body: any){
        return this.authService.getAccessToken(body.id,'admin');
    }
}
