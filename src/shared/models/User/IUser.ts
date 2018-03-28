
import { Document } from 'mongoose';

export interface IUser extends Document {
    profile: {
        userName: string,
        email: string,
        avatarUrl?: string,
        address?: {
            street: string,
            city: string,
            zipCode: string,
            countryCode: string
        },
        phoneNumber?: string,
    },
    password: string,
    money?: {
        value: number
    }
    products?: [
        {
            productID: string,
            isWin: boolean
        }
    ]
}