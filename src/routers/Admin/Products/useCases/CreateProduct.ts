import UseCase from "../../../../shared/core/UseCase";
import { IProduct } from "../../../../shared/models/Product/IProduct";
import ProductCreationRequest from "../models/ProductCreationRequest";
import AdminProductsRepository from "../repository/AdminProductsRepository";


export default class CreateProduct extends UseCase<ProductCreationRequest, IProduct> {

    private adminProductsRepository: AdminProductsRepository;

    constructor() {
        super();
        this.adminProductsRepository = new AdminProductsRepository();
    }

    async buildUseCase(request: ProductCreationRequest): Promise<IProduct> {
        let product = request.getModelDocument();
        let newProduct = await this.adminProductsRepository.createNewProduct(product);
        return newProduct;
    }
}