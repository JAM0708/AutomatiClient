export class Faq {
    private id: number;
    private question: string;
    private answer: string;

    constructor(id?: number, question?: string, answer?: string) {
        this.id = id;
        this.question = question;
        this.answer = answer;
    }
}