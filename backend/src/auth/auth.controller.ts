import { Controller, Get , Post, Body, Query, UseGuards ,Request,Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}
    
    @UseGuards(LoginGuard)
    @Post('login')
    login( @Response() res : any,  @Body() body: any) {
        const token = this.authService.isLogin(body.id, body.password);
        res.cookies('token', token , {
            httpOnly : true,
            maxAge : 1000 * 10 //10초
        });

        return res.send({result : 'success'})
    }
}
