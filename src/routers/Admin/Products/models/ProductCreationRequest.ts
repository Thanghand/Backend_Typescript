import BaseModelRequest from "../../../../shared/core/BaseModelRequest";
import { IProduct } from "../../../../shared/models/Product/IProduct";

export default class ProductCreationRequest extends BaseModelRequest<IProduct> {
    name: string;
    thumbnail: string;
    imageUrl: string;
    tags: Array<String>;
    price: number;
    startHour: string;
    endHour: string;
    isActivate: boolean;
    minimumTickets: number;
    maximumTickets: number;
    maximumUserTickets: number;
    category: String[];

    constructor(data: any) {
        super(data);
    }
    mapperDataJsonToProperties(data: any) {
        this.name = data.name;
        this.thumbnail = data.thumbnail || '';
        this.imageUrl = data.imageUrl || '';
        this.tags = data.tags || [];
        this.price = data.price || 0;
        this.startHour = data.startHour;
        this.endHour = data.endHour;
        this.isActivate = data.isActivate || false;
        this.maximumTickets = data.maximumTickets;
        this.minimumTickets = data.minimumTickets;
        this.maximumUserTickets = data.maximumUserTickets;
        this.category = data.category;
    }

    getModelDocument(): IProduct {
        let newProduct = <IProduct>{
            name: this.name,
            thumbnail: this.thumbnail,
            imageUrl: this.thumbnail,
            tags: this.tags,
            price: this.price,
            startHour: this.startHour,
            endHour: this.endHour,
            isActivate: this.isActivate,
            minimumTickets: this.minimumTickets,
            maximumTickets: this.maximumTickets,
            maximumUserTickets: this.maximumUserTickets,
            category: this.category
        }
        return newProduct;
    }
}