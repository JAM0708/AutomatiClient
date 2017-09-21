
export class User {
  public firstName: string;
  public lastName: string;
  public address: string;
  public email: string;
  public city: string;
  public state: string;
  public zipcode: number;
  public password: string;

  constructor(firstName: string, lastName: string, email: string, address: string, city: string,
              state: string, zipcode: number, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
     this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.password = password;
  }
}
