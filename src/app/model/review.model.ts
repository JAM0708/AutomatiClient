import { Person } from "./person.model";
import { Model } from "./model.model";
import { Car } from "./car.model";


export class Review {
    public id: number;
    public title: string;
    public rating: number;
    public time: string;
    public description: string;
    public car: Car;
    public person: Person;
    public model: Model;

    constructor(title: string,rating: number, car: Car, time: string, description: string, person: Person, model: Model, id?: number) {
        this.title = title;
        this.rating = rating;
        this.car = car;
        this.time = time;
        this.description = description;
        this.person = person;
        this.model = model;
        this.id = id;
    }
}