import { ICategory } from "../models/Category/ICategory";
import CategoryDao from "../models/Category/CategoryDao";

export interface ICategoryRepository {
    createCategory(category: ICategory): Promise<ICategory>;

    getCategories(): Promise<ICategory[]>;
}

export default class CategoryRepository implements ICategoryRepository {
    
    private categoryDao: CategoryDao;

    constructor(){
        this.categoryDao = new CategoryDao();
    }

    async createCategory(category: ICategory): Promise<ICategory>{
        return await this.categoryDao.create(category);
    }

    async getCategories(): Promise<ICategory[]>{
        return await this.categoryDao.find();
    }

}