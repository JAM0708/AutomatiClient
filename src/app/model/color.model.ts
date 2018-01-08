
export class Color {
    public name: string;
    public imgSrc: string;
    public imgAlt: string;
    public description: string;

    constructor(name: string, imgSrc: string, imgAlt: string, description: string) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.description = description;
    }
}