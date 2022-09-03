import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwt: JwtService
    ) {}

    async cookieJwt(userDto) {
        const payload = { email: userDto.email };
        const token = this.jwt.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age='7d';`
    }

    async validateUser(userDto) {
        const user = await this.userService.findOne(userDto);
        const passCheck = await bcrypt.compare(userDto.password, user.password);
        
        if(user && passCheck) {
            const payload = {
                email: user.email
            }

            return payload;
        }

        throw new UnauthorizedException({ message: 'Something wrong' });
    }

    async genToken(userDto) {
        const payload = { email: userDto.email };
        return {
            token: this.jwt.sign(payload)
        }
    }

    async login(userDto) {
        const checkUser = await this.validateUser(userDto);
        return this.genToken(checkUser);
    }

    async signup(userDto) {
        const createUser = await this.userService.createUser(userDto);
        return this.genToken(createUser);
    }
}
