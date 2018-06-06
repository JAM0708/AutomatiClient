import { Person } from "./person.model";
import { CreditCard } from "./creditcard.model";

export class Transaction {
    public id:number;
    public amount: number;
    public transactionDate: string;
    public description: string;
    public person: Person;
    public creditCardNumber: string;

    constructor(amount?: number, description?: string, person?: Person, creditCardNumber?: string, id?: number, transactionDate?: string) {
        this.amount = amount;
        this.description = description;
        this.person = person;
        this.creditCardNumber = creditCardNumber;
        this.id = id;
        this.transactionDate = transactionDate;

    }
}