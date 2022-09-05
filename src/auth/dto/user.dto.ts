import { IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}