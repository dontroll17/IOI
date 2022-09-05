import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({
        required: true, 
        trim: true
    })
    name: string;

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({type: Date, default: Date.now})
    created;
}

export const UserSchema = SchemaFactory.createForClass(User);