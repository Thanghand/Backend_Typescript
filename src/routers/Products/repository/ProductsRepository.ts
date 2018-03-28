import ProductDao from "../../../shared/models/Product/ProductDao";
import { IProduct } from "../../../shared/models/Product/IProduct";

export interface IProductRepository {
    createNewProduct(product: IProduct): Promise<IProduct>;

    getProducts(): Promise<IProduct[]>;

    getProductsDetail(productID: string): Promise<IProduct>;
}

export default class ProductsRepository implements IProductRepository {

    private productDao: ProductDao;

    constructor() {
        this.productDao = new ProductDao();
    }

    async createNewProduct(product: IProduct): Promise<IProduct> {
        return await this.productDao.create(product);
    }

    async getProducts(): Promise<IProduct[]> {
        return await this.productDao.find({ isActivate: true });
    }

    async getProductsDetail(productID: string): Promise<IProduct> {
        return await this.productDao.findById(productID);
    }
}