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
        @Res({passthrough: true}) res: Response,
        @Body() userDto: UserDto
    ) {
        const cookie = await this.authService.cookieJwt(userDto);
        res.setHeader('Set-Cookie', cookie);
        return this.authService.login(userDto);
    }

    @Post('signup')
    async signup(
        @Res({passthrough: true}) res: Response,
        @Body() createUserDto: CreateUserDto
    ) {
        const cookie = await this.authService.cookieJwt(createUserDto);
        res.setHeader('Set-Cookie', cookie);
        return this.authService.signup(createUserDto);
    }
}
