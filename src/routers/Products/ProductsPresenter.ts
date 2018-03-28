import BasePresenter from "../../shared/core/BasePresenter";
import ProductsSearchingRequest from "routers/Products/models/ProductsSearchingRequest";
import { IProduct } from "../../shared/models/Product/IProduct";
import { IResponse } from "../../shared/models/Response/IResponse";
import ResponseBuilder from "../../shared/models/Response/ResponseBuilder";
import GetProductDetail from "./useCases/GetProductDetail";
import GetProducts from "./useCases/GetProducts";

export interface IProductContract {

    getProduct(productID: string): Promise<IResponse>;

    getProductsIsActivated(request: ProductsSearchingRequest): Promise<IResponse>;
}

export default class ProductsPresenter extends BasePresenter implements IProductContract {

    private getProductDetail: GetProductDetail;
    private getProducts: GetProducts;

    constructor() {
        super();
        this.getProductDetail = new GetProductDetail();
        this.getProducts = new GetProducts();
    }

    async getProduct(productID: string): Promise<IResponse> {
        try {
            let product = await this.getProductDetail.execute(productID);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Get product detail")
                .setData(product)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Get Product Detail error")
                .build();
        }
    }

    async getProductsIsActivated(request: ProductsSearchingRequest): Promise<IResponse> {
        try {
            let products = await this.getProducts.execute(request);
            return new ResponseBuilder()
                .onSuccess()
                .setMessage("Get products")
                .setData(products)
                .build();

        } catch (error) {
            return new ResponseBuilder()
                .onError()
                .setMessage(error.code || "Get Products error")
                .build();
        }
    }
}