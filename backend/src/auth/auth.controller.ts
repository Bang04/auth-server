import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  UseGuards,
  Catch,
  HttpStatus,
  Res,
  ArgumentsHost,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginGuard } from './auth.guard';
import { UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Response() res: any, @Body() body: any) {
    console.log('컨트롤러 진입');
    let token = '';
    token = await this.authService.isLogin(body.id, body.password);
    console.log('2. 서비스 끝:', token);
    if (token === null) {
      console.log('3. 실패 분기');
      return res.status(401).json({ result: 'fail' });
    }

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 10, //10분
      sameSite: 'lax', //같은 사이트 요청이면 쿠키 허용
    });

     console.log('set-cookie : ', res.get('set-cookie'));
    console.log('4. 응답 직전');
    return res.json({ result: 'success' });
  }

  @Get('/my')
  @UseGuards(LoginGuard)
  async getMe(@Res() req: any, @Response() res: any) {
    try {
      //인증이 성공할 경우

      const token = req.cookies.token;
      const user = await this.authService.verify(token);
      return res.status(HttpStatus.OK).json({
        result: 'success',
        user: req['user'].id,
      });
    } catch (e) {
      //인증 오류가 발생한 경우
      throw new UnauthorizedException();
    }
  }
}

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFillter {
  constructor(private readonly res: any) {}

  public catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(401).json({ 
      result: 'fail', 
      message: 'Unauthorized' 
    });
  }
}
