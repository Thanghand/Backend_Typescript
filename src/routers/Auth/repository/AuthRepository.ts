import { IUser } from "../../../shared/models/User/IUser";
import UserDao from "../../../shared/models/User/UserDao";
import { error } from "util";
import * as bcrypt from 'bcryptjs';

export interface IAuthRepository {
    registerUser(user: IUser): Promise<IUser>;

    findAccount(email: string): Promise<IUser>;
}

export default class AuthRepository implements IAuthRepository {

    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    async registerUser(user: IUser): Promise<IUser> {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        return await this.userDao.create(user);
    }

    async findAccount(email: string): Promise<IUser> {
        return await this.userDao.findOne({
            'profile.email': email
        });
    }
} 