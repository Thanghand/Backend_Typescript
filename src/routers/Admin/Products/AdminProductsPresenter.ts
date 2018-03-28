

import DeleteProduct from "./useCases/DeleteProduct";
import CreateProduct from "./useCases/CreateProduct";
import GetProducts from "./useCases/GetProducts";
import UpdateProduct from "./useCases/UpdateProduct";

import ResponseBuilder from "../../../shared/models/Response/ResponseBuilder";
import BasePresenter from "../../../shared/core/BasePresenter";
import ProductCreationRequest from "./models/ProductCreationRequest";
import { IResponse } from "../../../shared/models/Response/IResponse";
import ProductUpdatedRequest from "./models/ProductUpdatedRequest";
import ProductsSearchingRequest from "./models/ProductsSearchingRequest";

export interface AdminContract {
    deleteProduct(productID: string): Promise<IResponse>;

    createNewProduct(request: ProductCreationRequest): Promise<IResponse>;

    updateProduct(request: ProductUpdatedRequest): Promise<IResponse>;

    findProducts(request: ProductsSearchingRequest): Promise<IResponse>;
}

export default class AdminProductPresenter extends BasePresenter implements AdminContract {

    private deleProductUseCase: DeleteProduct;
    private createProduct: CreateProduct;
    private updateProductUseCase: UpdateProduct;
    private getProducts: GetProducts;

    constructor() {
        super();
        this.deleProductUseCase = new DeleteProduct();
        this.createProduct = new CreateProduct();
        this.updateProductUseCase = new UpdateProduct();
        this.getProducts = new GetProducts();
    }

    async deleteProduct(productID: string): Promise<IResponse> {
        try {
            let confirm = await this.deleProductUseCase.execute(productID);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Delete product successfully")
                .build();
        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Delete product failed")
                .build();
        }
    }

    async createNewProduct(request: ProductCreationRequest) {
        try {
            let newProduct = await this.createProduct.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Create product successfully")
                .setData(newProduct)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Create new product failed")
                .build();
        }
    }

    async updateProduct(request: ProductUpdatedRequest) {
        try {
            let product = await this.updateProductUseCase.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Update product successfully")
                .setData(product)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Update product failed")
                .build();
        }
    }

    async findProducts(request: ProductsSearchingRequest): Promise<IResponse> {

        try {
            let products = await this.getProducts.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Find products successfully")
                .setData(products)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Update product failed")
                .build();
        }
    }
}