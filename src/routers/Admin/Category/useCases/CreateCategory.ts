import UseCase from "../../../../shared/core/UseCase";
import { ICategory } from "../../../../shared/models/Category/ICategory";
import CategoryCreationRequest from "../models/CategoryCreationRequest";
import CategoryRepository from "../../../../shared/repository/CategoryRepository";


export default class CreateCategory extends UseCase<CategoryCreationRequest, ICategory>{

    private categoryRepository: CategoryRepository;

    constructor() {
        super();
        this.categoryRepository = new CategoryRepository();
    }

    async buildUseCase(request: CategoryCreationRequest): Promise<ICategory> {
        return await this.categoryRepository.createCategory(request.getModelDocument());
    }
}