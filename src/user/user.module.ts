import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema
      }
    ])
  ]
})
export class UserModule {}