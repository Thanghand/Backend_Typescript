import ProductsSearchingRequest from "../models/ProductsSearchingRequest";
import { IProduct } from "../../../shared/models/Product/IProduct";
import UseCase from "../../../shared/core/UseCase";
import ProductsRepository from "../repository/ProductsRepository";

export default class GetProducts extends UseCase<ProductsSearchingRequest, IProduct[]>{

    private productsRepository: ProductsRepository;

    constructor() {
        super();
        this.productsRepository = new ProductsRepository();
    }

    async buildUseCase(query: ProductsSearchingRequest): Promise<IProduct[]> {
        return await this.productsRepository.getProducts();
    }
}