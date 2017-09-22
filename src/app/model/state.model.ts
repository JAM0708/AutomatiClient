import { ZipCode } from "./zipcode.model";


export class State {
    public id: number;
    public name: string;
    public zipcodes = new Set();
  
    constructor(id?: number, name?: string, codes?: Set<ZipCode>) {
      this.id = id;
      this.name = name;
      this.zipcodes = codes;
    }
  }
  