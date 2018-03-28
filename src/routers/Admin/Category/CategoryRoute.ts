import { BaseRoute } from "../../../shared/core/BaseRoute";
import CategoryPresenter from "./CategoryPresenter";
import { Router, Request, Response } from "express-serve-static-core";
import MapperResponse from "../../../shared/models/Response/MapperResponse";
import CategoryCreationRequest from "./models/CategoryCreationRequest";

export default class CategoryRoute extends BaseRoute {

    private categoryPresenter: CategoryPresenter;

    constructor() {
        super();
        this.categoryPresenter = new CategoryPresenter();
    }

    public getAllCategoriesAction(router: Router) {
        router.get('/', async (req: Request, res: Response) => {
            let responseMessage = await this.categoryPresenter.getAllCategories();
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }

    public createNewCategoryAction(router: Router) {
        router.post('/', async (req: Request, res: Response) => {
            let requestModel = new CategoryCreationRequest(req.body);
            let responseMessage = await this.categoryPresenter.createNewCategory(requestModel);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }
}