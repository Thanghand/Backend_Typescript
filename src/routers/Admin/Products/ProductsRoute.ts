import { BaseRoute } from "../../../shared/core/BaseRoute";
import { Router, Request, Response } from "express-serve-static-core";
import ProductCreationRequest from "../products/models/ProductCreationRequest";
import AdminProductsPresenter from "../products/AdminProductsPresenter";
import MapperResponse from "../../../shared/models/Response/MapperResponse";
import ProductUpdatedRequest from "../products/models/ProductUpdatedRequest";
import ProductsSearchingRequest from "../products/models/ProductsSearchingRequest";

export default class ProductsRoute extends BaseRoute {

    private adminProductsPresenter: AdminProductsPresenter;

    constructor() {
        super();
        this.adminProductsPresenter = new AdminProductsPresenter();
    }

    public createProductAction(router: Router): void {
        router.post('/', async (req: Request, res: Response) => {
            let productRequest = new ProductCreationRequest(req.body);
            let responseMessage = await this.adminProductsPresenter.createNewProduct(productRequest);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }

    public deleteProductAction(router: Router): void {
        router.delete('/', async (req: Request, res: Response) => {
            let responseMessage = await this.adminProductsPresenter.deleteProduct(req.params.id);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }

    public updateProductAction(router: Router): void {
        router.patch('/', async (req: Request, res: Response) => {
            let requestProduct = new ProductUpdatedRequest(req.body);
            let responseMessage = await this.adminProductsPresenter.updateProduct(requestProduct);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }

    public getProductsAction(router: Router): void {
        router.get('/search', async (req: Request, res: Response) => {
            let requestProduct = new ProductsSearchingRequest(req.params);
            let responseMessage = await this.adminProductsPresenter.findProducts(requestProduct);
            res = MapperResponse.mapResponseToResJson(res, responseMessage);
        });
    }
    

}