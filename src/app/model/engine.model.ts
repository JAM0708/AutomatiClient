
export class Engine {
    public id: number; 
    public cylinders: number;
    public litres: number;

    constructor(id: number, cylinders: number, litres: number) {
        this.id = id;
        this.cylinders = cylinders;
        this.litres = litres;
    }
}