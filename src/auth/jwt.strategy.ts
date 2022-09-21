import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../user/user.service";
import 'dotenv/config';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),        
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY
        });
    }

    async validate(payload) {
        const user = await this.userService.findOne(payload);

        if(!user) {
            throw new UnauthorizedException({ message: 'User not found'})
        }

        return { email: payload.email };
    }
}
