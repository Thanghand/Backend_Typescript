
import { IUser } from './IUser';
import { Model, model, Schema } from 'mongoose';

const schema = new Schema({
    profile: {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        avatarUrl: String,
        address: {
            street: String,
            city: String,
            zipCode: String,
            countryCode: String,
        },
        phoneNumber: String,
    },
    password: {
        type: String,
        required: true
    },
    money: {
        value: {
            type: Number,
            default: 0
        },
        updatedAt: {
            type: Date,
            "default": Date.now()
        },
    },
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    },
    products: [{
        productID: String,
        isWin: Boolean
    }],
});

type UserModel = Model<IUser>;
export const UserSchema = <UserModel>model<IUser>("Users", schema);