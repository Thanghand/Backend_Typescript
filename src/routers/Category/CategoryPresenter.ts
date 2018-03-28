import BasePresenter from "../../shared/core/BasePresenter";
import GetCategories from "./useCases/GetCategories";
import { IResponse } from "../../shared/models/Response/IResponse";
import ResponseBuilder from "../../shared/models/Response/ResponseBuilder";


export interface ICategoryContract {
    getAllCategories(): Promise<IResponse>;
}
export default class CategoryPresenter extends BasePresenter implements ICategoryContract {

    private getCategories: GetCategories;

    constructor() {
        super();
        this.getCategories = new GetCategories();
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
}