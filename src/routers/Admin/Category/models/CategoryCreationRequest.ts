
import BaseModelRequest from "../../../../shared/core/BaseModelRequest";
import { ICategory } from "../../../../shared/models/Category/ICategory";

export default class CategoryCreationRequest extends BaseModelRequest<ICategory>{

    private nameCode: string;
    private isActivated: boolean;
    private displayNames: Array<any>;

    constructor(data: any) {
        super(data);
    }

    mapperDataJsonToProperties(data: any) {
        this.nameCode = data.nameCode;
        this.isActivated = data.isActivated;
        this.displayNames = data.displayNames;
    }

    getModelDocument(): ICategory {
        let category = <ICategory>{
            nameCode: this.nameCode,
            displayNames: this.displayNames,
            isActivated: this.isActivated
        }
        return category;
    }
}