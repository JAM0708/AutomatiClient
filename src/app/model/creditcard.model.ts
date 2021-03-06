import { Person } from "./person.model";


export class CreditCard {
    public number: string;
    public expDate: string;
    public csc: number;
    public person: Person;
    public id: number;

    constructor(number: string, expDate: string, csc: number, person: Person, id?: number) {
        this.number = number;
        this.expDate = expDate;
        this.csc = csc;
        this.person = person;
        this.id = id;
    }
}