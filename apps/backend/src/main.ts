import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(graphqlUploadExpress());
  app.enableCors({
    credentials: true,
    origin: [
      'http://localhost:3001',
      'https://buddies-frontend-k2iyiatma-ordamari.vercel.app',
    ],
  });
  await app.listen(3000);
}
bootstrap();
