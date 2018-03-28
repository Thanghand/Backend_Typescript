import { Schema, Model, model } from "mongoose";
import { ICategory } from "shared/models/Category/ICategory";


const categorySchema = new Schema({
    nameCode: {
        type: String,
        require: true
    },
    displayNames: [
        {
            name: String,
            countryCode: String
        }
    ],
    isActivated: Boolean,
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    },
})
type CategoryModel = Model<ICategory>;
export const CategorySchema = <CategoryModel>model<ICategory>("Category", categorySchema);



