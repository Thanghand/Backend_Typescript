import { IUser } from './IUser';
import { BaseDao } from '../../core/BaseDao';
import { UserSchema } from './UserSchema';

export default class UserDao extends BaseDao<IUser> {

    constructor() {
        super(UserSchema);
    }
}