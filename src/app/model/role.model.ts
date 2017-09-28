
export class Role {
    public id: number;
    public name: string;
  
    constructor(id: number = 1, name?: string) {
      this.id = id;
      this.name = name;
    }
  }
  