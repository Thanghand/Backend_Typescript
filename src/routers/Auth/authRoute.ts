
import { Router, Request, Response } from 'express';
import { BaseRoute } from '../../shared/core/BaseRoute';
import AuthPresenter from '../../routers/Auth/AuthPresenter';
import MapperResponse from '../../shared/models/Response/MapperResponse';
import UserRegisterRequest from './models/UserRegisterRequest';
import UserLoginRequest from './models/UserLoginRequest';

export default class AuthRoute extends BaseRoute {

    private authPresenter: AuthPresenter;

    constructor() {
        super();
        this.authPresenter = new AuthPresenter();
    }

    public registerAction(router: Router): void {
        router.post('/register', async (req: Request, res: Response) => {
            let request = new UserRegisterRequest(req.body);
            let responseMessage = await this.authPresenter.registerNewAccount(request);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }

    public loginAction(router: Router): void {
        router.post('/login', async (req: Request, res: Response) => {
            let request = new UserLoginRequest(req.body);
            let responseMessage = await this.authPresenter.login(request)
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }
}