export interface IDecodedToken {
    aud: string[];
    exp: number;
    expiration:Date;
    role: string;
    emailaddress: string;
    name: string;
    nameidentifier:string;
    iss: string;
    jti: string;
    nbf: number;
}

export class DecodedToken implements IDecodedToken {
    aud: string[];
    exp: number;
    expiration:Date;
    role: string;
    emailaddress: string;
    name: string;
    nameidentifier:string;
    iss: string;
    jti: string;
    nbf: number;
    constructor(){
        this.aud = [];
        this.exp = 0;
        this.role = '';
        this.emailaddress = '';
        this.name = '';
        this.nameidentifier = '';
        this.iss = '';
        this.jti = '';
        this.nbf = 0;
        this.expiration = new Date();
    }
}