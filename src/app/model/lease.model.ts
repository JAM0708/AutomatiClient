
export class Lease {
    public monthlyPayment: number;
    public interestRate: number;
    public length: number;
    public startDate: Date;

    constructor(monthlyPayment: number, interestRate: number, length: number, startDate: Date) {
        this.monthlyPayment = monthlyPayment;
        this.interestRate = interestRate;
        this.length = length;
        this.startDate = startDate;
    }

}