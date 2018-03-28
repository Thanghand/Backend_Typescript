
import { ICategory } from "./ICategory";
import { BaseDao } from "../../core/BaseDao";
import { CategorySchema } from "./CategorySchema";

export default class CategoryDao extends BaseDao<ICategory> {

    constructor() {
        super(CategorySchema);
    }
}