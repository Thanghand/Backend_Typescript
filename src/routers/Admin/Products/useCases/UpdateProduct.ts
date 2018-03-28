import UseCase from "../../../../shared/core/UseCase";
import ProductUpdatedRequest from "../models/ProductUpdatedRequest";
import { IProduct } from "../../../../shared/models/Product/IProduct";
import AdminProductsRepository from "../repository/AdminProductsRepository";

export default class UpdateProduct extends UseCase<ProductUpdatedRequest, IProduct>{

    private adminProductsRepository: AdminProductsRepository;

    constructor() {
        super();
        this.adminProductsRepository = new AdminProductsRepository();
    }

    async buildUseCase(request: ProductUpdatedRequest): Promise<IProduct> {
        let product = request.getModelDocument();
        return await this.adminProductsRepository.updateProduct(product);
    }
}