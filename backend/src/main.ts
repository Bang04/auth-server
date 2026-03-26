import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors(); //포트 다르면 무조건 CORS 필요
  app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true //쿠키 쓸 경우
  }))
  await app.listen(3000, () => { console.log('listening on port 3000') });
}
bootstrap();
