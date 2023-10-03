export interface IStrategy{
    name:string;
    value:string;
}

export class Strategy implements IStrategy {
    name:string;
    value:string;
    constructor(){
        this.name = '';
        this.value = '';
    }
}