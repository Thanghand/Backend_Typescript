import { Document } from "mongoose";

export interface IProduct extends Document {
    name: string,
    thumbnail: string,
    imageUrl: string,
    lotteryHistory: [
        {
            userID: string,
            userName: string,
            timeToPlay: string,
        }
    ],
    descriptions: [
        {
            countryCode: string,
            description: string
        }
    ],
    timeZone: [''],
    tags: [''],
    price: number,
    startHour: string,
    endHour: string,
    isActivate: boolean,
    minimumTickets: number,
    maximumTickets: number,
    maximumUserTickets: number,
    winnerTickets: [
        {
            userID: string,
            userName: string
        }
    ],
    usersPlaying: [
        {
            userID: string,
            userName: string,
            timePlaying: string
        }
    ],
    reviews: [
        {
            userID: string,
            userName: string,
            timeReview: string
        }
    ],
    rates: number,
    category: [string]
}