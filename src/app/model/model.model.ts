
export class Model {
    public name: string;
    public imgSrc: string;
    public imgAlt: string;

    constructor(name: string, imgSrc?: string, imgAlt?: string) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
    }
}