import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers() {
        return await this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(
        @Param('id') id: string
    ) {
        return await this.userService.getUserById(id);
    }

    @Post()
    async createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return await this.userService.createUser(createUserDto);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() userDto: CreateUserDto
    ) {
        return await this.userService.updateUser(id, userDto);
    }

    @Delete(':id')
    @HttpCode(204)
    async removeUser(
        @Param('id') id: string
    ) {
        return await this.userService.removeUser(id);
    }
}
