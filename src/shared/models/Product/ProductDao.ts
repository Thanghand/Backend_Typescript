import { IProduct } from "./IProduct";
import { BaseDao } from "../../core/BaseDao";
import { ProductSchema } from "./ProductSchema";

export default class ProductDao extends BaseDao<IProduct> {

    constructor() {
        super(ProductSchema);
    }
}