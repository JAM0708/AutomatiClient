import { Person } from "./person.model";


export class Review {
    public rating: number;
    public time: Date;
    public description: string;
    public person: Person;

    constructor(rating: number, time: Date, description: string, person: Person) {
        this.rating = rating;
        this.time = time;
        this.description = description;
        this.person = person;
    }
}