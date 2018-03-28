import UseCase from "../../../shared/core/UseCase";
import { ICategory } from "../../../shared/models/Category/ICategory";
import CategoryRepository from "../../../shared/repository/CategoryRepository";

export default class GetCategories extends UseCase<void, ICategory[]>{

    private categoryRepository: CategoryRepository;

    constructor() {
        super();
        this.categoryRepository = new CategoryRepository();
    }

    async buildUseCase(data: void): Promise<ICategory[]> {
        return await this.categoryRepository.getCategories();
    }
}