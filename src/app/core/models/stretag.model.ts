import { IOrder } from "./order.model";
import { IPosition } from "./position.model";

export interface IStrategy{
    accountId:string;
    fullname:string;
    name: string;
    orders:IOrder[];
    platform:string;
    positions:IPosition[];
    strategy:string;
    total: number | null;
    totalAbs: number;
    username:string;
}

export class Strategy implements IStrategy {
    accountId:string;
    fullname:string;
    name: string;
    orders:IOrder[];
    platform:string;
    positions:IPosition[];
    strategy:string;
    total: number | null;
    totalAbs: number;
    username:string;
    constructor(){
        this.accountId = '';
        this.fullname = '';
        this.name = '';
        this.orders = [];
        this.platform = '';
        this.positions = [];
        this.strategy = '';
        this.total = 0;
        this.totalAbs = 0;
        this.username = '';
    }
}