import { User } from "./user.model";

export class CreditCard {
    public number: number;
    public expDate: Date;
    public csc: number;
    public user: User;

    constructor(number: number, expDate: Date, csc: number, user: User) {
        this.number = number;
        this.expDate = expDate;
        this.csc = csc;
        this.user = user;
    }
}