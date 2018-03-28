import { IProduct } from "../../../../shared/models/Product/IProduct";
import ProductDao from "../../../../shared/models/Product/ProductDao";
import ProductsSearchingRequest from "../models/ProductsSearchingRequest";

export interface IAdminProductsRepository {
    createNewProduct(product: IProduct): Promise<IProduct>;

    deleteProduct(productID: string): Promise<void>;

    updateProduct(product: IProduct): Promise<IProduct>;

    getProducts(query: ProductsSearchingRequest): Promise<IProduct[]>;
}

export default class AdminProductsRepository implements IAdminProductsRepository {

    private productDao: ProductDao;

    constructor() {
        this.productDao = new ProductDao();
    }

    async createNewProduct(product: IProduct): Promise<IProduct> {
        return await this.productDao.create(product);
    }

    async deleteProduct(productID: string): Promise<void> {
        return await this.productDao.delete(productID);
    }

    async updateProduct(product: IProduct): Promise<IProduct> {
        return await this.productDao.findByIdAndUpdate(product._id, product);
    }

    async getProducts(query: ProductsSearchingRequest): Promise<IProduct[]> {
        return await this.productDao.find();
    }

}