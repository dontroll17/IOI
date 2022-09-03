import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECT), 
    UserModule, AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
