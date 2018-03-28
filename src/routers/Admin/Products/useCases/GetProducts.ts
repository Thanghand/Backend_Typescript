import ProductsSearchingRequest from "../models/ProductsSearchingRequest";
import { IProduct } from "../../../../shared/models/Product/IProduct";
import UseCase from "../../../../shared/core/UseCase";
import AdminProductsRepository from "../repository/AdminProductsRepository";

export default class GetProducts extends UseCase<ProductsSearchingRequest, IProduct[]>{

    private adminProductsRepository: AdminProductsRepository;

    constructor() {
        super();
        this.adminProductsRepository = new AdminProductsRepository();
    }

    async buildUseCase(query: ProductsSearchingRequest): Promise<IProduct[]> {
        return await this.adminProductsRepository.getProducts(query);
    }
}