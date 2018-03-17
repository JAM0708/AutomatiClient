
export class Model {
    public name: string;
    public imgSrc: string;
    public imgAlt: string;
    public description:string;
    public modelStockPrice: number;

    constructor(name: string, imgSrc?: string, imgAlt?: string, description?: string, modelStockPrice?: number) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.description = description;
        this.modelStockPrice = modelStockPrice;
    }
}