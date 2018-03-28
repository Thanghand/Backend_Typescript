import { Schema, Model, model } from "mongoose";
import { IProduct } from "shared/models/Product/IProduct";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: String,
    imageUrl: String,
    lotteryHistory: [
        {
            userID: String,
            userName: String,
            timeToPlay: String
        }
    ],
    descriptions: [
        {
            countryCode: String,
            description: String
        }
    ],
    timeZone: Array,
    tags: Array,
    price: Number,
    startHour: String,
    endHour: String,
    isActivate: Boolean,
    minimumTickets: Number,
    maximumTickets: Number,
    maximumUserTickets: Number,
    winnerTickets: [
        {
            userID: String,
            userName: String
        }
    ],
    usersPlaying: [{
        userID: String,
        userName: String,
        timePlaying: String
    }],
    reviews: [
        {
            userID: String,
            userName: String,
            timeReview: String
        }
    ],
    rates: Number,
    createAt: {
        type: Date,
        "default": Date.now()
    },
    updatedAt: {
        type: Date,
        "default": Date.now()
    },
    category: [String]
});

type ProductModel = Model<IProduct>;
export const ProductSchema = <ProductModel>model<IProduct>("Products", productSchema);