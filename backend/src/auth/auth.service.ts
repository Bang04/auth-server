import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  isLogin(id: string, password: string): any {
    if (id === 'admin' && password === '1234') {
      const payload = { id: id, role: 'admin' };
      return {
        result: true,
        token: this.jwtService.sign(payload), //toekn 생성;
      };
    } else {
      return {
        result: false,
        token: null,
      };
    }
  }
}
