
export class Color {
    public id: number;
    public name: string;
    public imgSrc: string;
    public imgAlt: string;
    public description: string;
    public colorPrice: number;


    constructor(id: number, name: string, imgSrc: string, imgAlt: string, description: string, colorPrice: number) {
        this.id = id;
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.description = description;
        this.colorPrice = colorPrice;
    }
}