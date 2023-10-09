export interface IPosition {
    average_price:number;
    buy_price:number;
    buy_quantity:number;
    buy_value:number;
    instrument_token: number;
    last_price:number;
    ltp:number;
    m2m:number;
    quantity:number;
    sell_price:number;
    sell_quantity:number;
    sell_value:number;
    tradingsymbol:string;
}

export class Position implements IPosition {
    average_price:number;
    buy_price:number;
    buy_quantity:number;
    buy_value:number;
    instrument_token: number;
    last_price:number;
    ltp:number;
    m2m:number;
    quantity:number;
    sell_price:number;
    sell_quantity:number;
    sell_value:number;
    tradingsymbol:string;
    constructor(){
        this.average_price = 0;
        this.buy_price = 0;
        this.buy_quantity = 0;
        this.buy_value = 0;
        this.instrument_token = 0;
        this.last_price = 0;
        this.ltp = 0;
        this.m2m = 0;
        this.quantity = 0;
        this.sell_price = 0;
        this.sell_quantity = 0;
        this.sell_value = 0;
        this.tradingsymbol = '';
    }
}