import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: process.env.SERVER_HOST,
      port: process.env.REDIS_PORT
    }),
    MongooseModule.forRoot(process.env.CONNECT), 
    UserModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
