import { Document } from "mongoose";


export interface ICategory extends Document {
    "nameCode": string,
    "displayNames": [
        {
            "name": string,
            "countryCode": string
        }
    ],
    "isActivated": boolean
}