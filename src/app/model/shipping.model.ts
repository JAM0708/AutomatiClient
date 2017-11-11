import { State } from "./state.model";
import { User } from "./user.model";

export class Shipping  {
    public id: number;
    public firstName: String;
    public lastName: String;
    public street: String;
    public city: String;
    public state: State;
    public user: User;

    constructor(firstName: string, lastName: string, street: string, city: string, state?: State, user?: User, id?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.state = state;
        this.user = user;
        this.id = id;
    }
}