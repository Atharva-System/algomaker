export interface IOrder {
    exchange:string;
    filled_quantity:number;
    instrument_token:number;
    order_timestamp:Date;
    order_type:string;
    quantity: number;
    status:string;
    tag:string;
    tradingsymbol:string;
    transaction_type:string;
}

export class Order implements IOrder {
    exchange:string;
    filled_quantity:number;
    instrument_token:number;
    order_timestamp:Date;
    order_type:string;
    quantity: number;
    status:string;
    tag:string;
    tradingsymbol:string;
    transaction_type:string;
    constructor(){
       this.exchange = '';
       this.filled_quantity = 0;
       this.instrument_token = 0;
       this.order_timestamp = new Date();
       this.order_type = '';
       this.quantity = 0;
       this.status = '';
       this.tag = '';
       this.tradingsymbol = '';
       this.transaction_type = ''; 
    }
}