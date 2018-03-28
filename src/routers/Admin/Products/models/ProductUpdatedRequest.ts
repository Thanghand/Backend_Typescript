import BaseModelRequest from "../../../../shared/core/BaseModelRequest";
import { IProduct } from "../../../../shared/models/Product/IProduct";

export default class ProductUpdatedRequest extends BaseModelRequest<IProduct> {

    name: string;
    thumbnail: string;
    imageUrl: string;
    descriptions: Array<any>;
    timeZone: Array<any>;
    tags: Array<string>;
    price: number;
    startHour: string;
    endHour: string;
    isActivate: boolean;
    minimumTickets: number;
    maximumTickets: number;
    maximumUserTickets: number;

    constructor(data: any) {
        super(data);
    }

    mapperDataJsonToProperties(data: any) {
        this.name = data.name;
        this.thumbnail = data.thumbnail;
        this.imageUrl = data.imageUrl;
        this.descriptions = data.descriptions;
        this.timeZone = data.timeZone;
        this.tags = data.tags;
        this.price = data.price;
        this.startHour = data.startHour;
        this.endHour = data.endHour;
        this.isActivate = data.isActivate;
        this.maximumTickets = data.minimumTickets;
        this.maximumTickets = data.maximumTickets;
        this.maximumUserTickets = data.maximumUserTickets;
    }

    getModelDocument(): IProduct {
        return <IProduct>{
            name: this.name,
            thumbnail: this.thumbnail,
            imageUrl: this.imageUrl,
            descriptions: this.descriptions,
            timeZone: this.timeZone,
            tags: this.tags,
            price: this.price,
            startHour: this.startHour,
            endHour: this.endHour,
            isActivate: this.isActivate,
            minimumTickets: this.minimumTickets,
            maximumTickets: this.maximumTickets,
            maximumUserTickets: this.maximumUserTickets
        }
    }
}