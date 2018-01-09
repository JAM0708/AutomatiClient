import { State } from "./state.model";
import { Person } from "./person.model";

export class Shipping  {
    public id: number;
    public firstName: String;
    public lastName: String;
    public street: String;
    public city: String;
    public state: State;
    public person: Person;

    constructor(firstName: string, lastName: string, street: string, city: string, state?: State, person?: Person, id?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.person = person;
        this.id = id;
    }
}