import { Controller, Get , Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
    @Post('login')
    login(@Body() body: any) {
        console.log(body);
        return this.authService.isLogin(body.id, body.password);
    }
}
