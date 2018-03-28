import UseCase from "../../../../shared/core/UseCase";
import { IUser } from "../../../../shared/models/User/IUser";
import AuthRepository from "../../../../routers/Auth/repository/AuthRepository";
import EmailValidator from "../../../../routers/Auth/common/validators/EmailValidator";
import UserRegisterRequest from "../../models/UserRegisterRequest";

export default class RegisterAccount extends UseCase<UserRegisterRequest, IUser> {

    private authRepository: AuthRepository;

    constructor() {
        super();
        this.authRepository = new AuthRepository();
    }

    async buildUseCase(request: UserRegisterRequest): Promise<IUser> {
        if (!EmailValidator.isValidEmail(request.email)) {
            throw { code: 'Invalid email' };
        }

        let user = await this.authRepository.findAccount(request.email);
        if (!user) {
            let newUser = request.getModelDocument();
            return await this.authRepository.registerUser(newUser);
        } else {
            throw { code: 'User has already existed' };
        }
    }

}