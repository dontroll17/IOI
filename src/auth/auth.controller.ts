import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(
        @Body() userDto: UserDto
    ) {
        return this.authService.login(userDto);
    }

    @Post('signup')
    async signup(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.authService.signup(createUserDto);
    }
}
