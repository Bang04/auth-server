import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

//expiresIn (JWT 만료 시간)
// 초	'60s'
// 분	'1m'
// 시간	'1h'
// 일	'1d'
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1m' }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
