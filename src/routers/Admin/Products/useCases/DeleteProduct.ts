import { IProduct } from "../../../../shared/models/Product/IProduct";
import UseCase from "../../../../shared/core/UseCase";
import AdminProductsRepository from "../repository/AdminProductsRepository";

export default class DeleteProduct extends UseCase<string, void>{

    private adminProductsRepository: AdminProductsRepository;

    constructor() {
        super();
        this.adminProductsRepository = new AdminProductsRepository();
    }

    async buildUseCase(productID: string): Promise<void> {
        return this.adminProductsRepository.deleteProduct(productID);
    }
}