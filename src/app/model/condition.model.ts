
export class Condition {
    
    public type:string;
    public title:string;
    public mileage:number;

    constructor(type: string, title: string, mileage: number) {
        this.type = type;
        this.title = title;
        this.mileage = mileage;
    }
}