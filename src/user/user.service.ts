import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './model/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<UserDocument>
    ) {}

    async getUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async getUserById(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();

        if(!user) {
            throw new NotFoundException({message: 'User not found'});
        }

        return user;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const create = new this.userModel({...createUserDto});
        return await create.save();
    }

    async removeUser(id: string): Promise<User> {
        const user = await this.userModel.findByIdAndDelete(id).exec();
        
        if(!user) {
            throw new NotFoundException({message: 'User not found'});
        }

        return user;
    }

    async updateUser(id: string, updateUserDto: CreateUserDto): Promise<User> {
        const user = await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
        
        if(!user) {
            throw new NotFoundException({message: 'User not found'});
        }

        return user;
    }
}
