import { IUser } from '../../../../shared/models/User/IUser';
import { Model, model, Schema } from 'mongoose';
import { BaseDao } from '../../../../shared/core/BaseDao';

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});

type UserModel = Model<IUser>;
const UserSchema = <UserModel>model<IUser>("User", schema);

export default class UserDao extends BaseDao<IUser> {

    constructor() {
        super(UserSchema);
    }
}