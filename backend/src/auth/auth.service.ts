import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  //constructor(...) : 클래스가 생성될 때 실행되는 생성자
  // private : 매개변수로 받은 고유 클래스 내부의 private 필드로 자동 선언
  //
  constructor(private jwtService: JwtService) {}
  async isLogin(id: string, password: string): Promise<any> {

    if (id === 'test' && password === '1234') {
      const payload = { id: id, role: 'admin' };
      return await this.jwtService.sign(payload);
    } else {
      return false
    }
  }
}
