import UseCase from "../../../../shared/core/UseCase";
import AuthRepository from "../../../../routers/Auth/repository/AuthRepository";
import PassWordUtils from "../../../../routers/Auth/common/utils/PasswordUtils";
import { IUser } from "../../../../shared/models/User/IUser";
import * as jwt from 'jsonwebtoken';
import EmailValidator from "../../../../routers/Auth/common/validators/EmailValidator";
import UserLoginRequest from "../../models/UserLoginRequest";

export default class LoginAccount extends UseCase<UserLoginRequest, string>{

    private authRepository: AuthRepository;

    constructor() {
        super();
        this.authRepository = new AuthRepository();
    }

    async buildUseCase(request: UserLoginRequest): Promise<string> {

        if (!EmailValidator.isValidEmail(request.email)) {
            throw { code: 'Invalid email' };
        }
        
        let user = await this.authRepository.findAccount(request.email);
        if (user) {
            if (PassWordUtils.comparePassword(request.password, user.password)) {
                const token = jwt.sign(user, process.env.APPLICATION_SECRET, {
                    expiresIn: 604800 // 1 week
                });
                return token;
            } else {
                throw { code: 'Login failed' }
            }
        } else {
            throw { code: 'User has not existed ' };
        }
    }
}