// src/app.module.ts
import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
      // env파일 스키마 점검
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(), // env파일에 DATABASE_HOST가 반드시 있어야함
        DATABASE_PORT: Joi.number().default(3305), // env파일에 DATABASE_PORT가 있어야 하지만 없으면 임의로 3305입력
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
