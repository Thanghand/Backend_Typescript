import { BaseRoute } from "../../shared/core/BaseRoute";
import ProductsPresenter from "../../routers/Products/ProductsPresenter";
import { Router, Request, Response } from "express";
import MapperResponse from "../../shared/models/Response/MapperResponse";
import ProductsSearchingRequest from "./models/ProductsSearchingRequest";

export default class ProductsRoute extends BaseRoute {

    private productsPresenter: ProductsPresenter;

    constructor() {
        super();
        this.productsPresenter = new ProductsPresenter();
    }
  
    public getProductsAction(router: Router): void {
        router.get('/search', async (req: Request, res: Response) => {
            let productsQuery = new ProductsSearchingRequest();
            let responseMessage = await this.productsPresenter.getProductsIsActivated(productsQuery);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }

    public getProductDetailAction(router: Router): void {
        router.get('/:id', async (req: Request, res: Response) => {
            let productID = req.params.id;
            let responseMessage = await this.productsPresenter.getProduct(productID);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }
}

