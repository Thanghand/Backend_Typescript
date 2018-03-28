import { IProduct } from "../../../shared/models/Product/IProduct";
import UseCase from "../../../shared/core/UseCase";
import ProductsRepository from "../repository/ProductsRepository";

export default class GetProductDetail extends UseCase<string, IProduct>{

    private productsRepository: ProductsRepository;

    constructor() {
        super();
        this.productsRepository = new ProductsRepository();
    }
    
    async buildUseCase(productID: string): Promise<IProduct> {
        return await this.productsRepository.getProductsDetail(productID);
    }
}