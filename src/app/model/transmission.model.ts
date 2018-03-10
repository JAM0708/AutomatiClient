
export class Transmission {
    public id: number;
    public name: string;
    public imgSrc: string;
    public imgAlt: string;
    public description: string;
    public transmissionPrice: number;

    constructor(id: number, name: string, imgSrc: string, imgAlt: string, description: string, transmissionPrice: number) {
        this.id = id;
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.description = description;
        this.transmissionPrice = transmissionPrice;
    }
}