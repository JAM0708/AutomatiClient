import { User } from "./user.model";

export class Review {
    public rating: number;
    public time: Date;
    public description: string;
    public user: User;

    constructor(rating: number, time: Date, description: string, user: User) {
        this.rating = rating;
        this.time = time;
        this.description = description;
        this.user = user;
    }
}