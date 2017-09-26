import { Car } from "./car.model";

export class Feature {
    public description: string;
    public car: Car;
    
    constructor(description: string, car: Car) {
        this.description = description;
        this.car = car;
    }
}