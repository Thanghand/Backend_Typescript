import BaseModelRequest from "../../../shared/core/BaseModelRequest";
import { IUser } from "../../../shared/models/User/IUser";

export default class UserLoginRequest extends BaseModelRequest<IUser> {
    email: string;

    password: string;

    constructor(data: any) {
        super(data);
    }

    mapperDataJsonToProperties(data: any) {
        this.email = data.email;
        this.password = data.password;
    }
}