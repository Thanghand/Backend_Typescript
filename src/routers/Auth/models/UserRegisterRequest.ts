import BaseModelRequest from "../../../shared/core/BaseModelRequest";
import { IUser } from "../../../shared/models/User/IUser";

export default class UserRegisterRequest extends BaseModelRequest<IUser> {

    userName: string;

    email: string;

    password: string;

    constructor(data: any) {
        super(data);
    }

    mapperDataJsonToProperties(data: any) {
        this.userName = data.userName;
        this.email = data.email;
        this.password = data.password;
    }

    getModelDocument(): IUser {
        let newUser = <IUser>{
            profile: {
                userName: this.userName,
                email: this.email
            },
            password: this.password
        }
        return newUser;
    }
}