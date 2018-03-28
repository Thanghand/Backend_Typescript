import BasePresenter from "../../../shared/core/BasePresenter";
import GetCategories from "./useCases/GetCategories";
import { IResponse } from "../../../shared/models/Response/IResponse";
import ResponseBuilder from "../../../shared/models/Response/ResponseBuilder";
import CategoryCreationRequest from "./models/CategoryCreationRequest";
import CreateCategory from "./useCases/CreateCategory";


export interface ICategoryContract {
    getAllCategories(): Promise<IResponse>;

    createNewCategory(request: CategoryCreationRequest): Promise<IResponse>;
}
export default class CategoryPresenter extends BasePresenter implements ICategoryContract {

    private getCategories: GetCategories;
    private createCategory: CreateCategory;

    constructor() {
        super();
        this.getCategories = new GetCategories();
        this.createCategory = new CreateCategory();
    }

    async getAllCategories(): Promise<IResponse> {
        try {
            let data = await this.getCategories.execute();
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Get categories")
                .setData(data)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Get categories error")
                .build();
        }
    }

    async createNewCategory(request: CategoryCreationRequest): Promise<IResponse> {
        try {
            let data = await this.createCategory.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Create new category successfully")
                .setData(data)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Create new category error")
                .build();
        }
    }

}