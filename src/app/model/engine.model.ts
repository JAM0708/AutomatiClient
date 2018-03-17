
export class Engine {
    public id: number; 
    public cylinders: number;
    public litres: number;
    public stockEnginePrice: number;

    constructor(id: number, cylinders: number, litres: number, stockEnginePrice: number) {
        this.id = id;
        this.cylinders = cylinders;
        this.litres = litres;
        this.stockEnginePrice = stockEnginePrice;
    }
}