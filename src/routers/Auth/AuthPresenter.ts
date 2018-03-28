import RegisterAccount from "../../routers/Auth/useCases/registerAccount/RegisterAccount";
import BasePresenter from "../../shared/core/BasePresenter";
import LoginAccount from "../../routers/Auth/useCases/loginAccount/LoginAccount";
import { IResponse } from "../../shared/models/Response/IResponse";
import ResponseBuilder from "../../shared/models/Response/ResponseBuilder";
import UserRegisterRequest from "routers/Auth/models/UserRegisterRequest";
import UserLoginRequest from "routers/Auth/models/UserLoginRequest";


interface AuthContract {
    registerNewAccount(request: UserRegisterRequest): Promise<IResponse>;

    login(request: UserLoginRequest): Promise<IResponse>;
}

export default class AuthPresenter extends BasePresenter implements AuthContract {

    private registerAccount: RegisterAccount;
    private loginAccount: LoginAccount;

    constructor() {
        super();
        this.registerAccount = new RegisterAccount();
        this.loginAccount = new LoginAccount();
    }

    async registerNewAccount(request: UserRegisterRequest): Promise<IResponse> {
        try {
            let user = await this.registerAccount.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Register successfully")
                .setData(user)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code)
                .build();
        }
    }

    async login(request: UserLoginRequest): Promise<IResponse> {

        try {
            let token = await this.loginAccount.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Login successfully")
                .setToken(token)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code)
                .build();
        }
    }

}