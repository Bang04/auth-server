import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Response() res: any, @Body() body: any) {
    console.log('컨트롤러 진입');
    const token = await this.authService.isLogin(body.id, body.password);
    console.log('2. 서비스 끝:', token);
    if (!token) {
      console.log('3. 실패 분기');
      return res.status(401).json({ result: 'faile' });
    }

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 10,
      sameSite: 'lax', //같은 사이트 요청이면 쿠키 허용
    });

    console.log('4. 응답 직전');
    return res.json({ result: 'success' });
  }

  @Get('/me')
  getMe(@Request() req : any ){
    return req.user;
  }
}
