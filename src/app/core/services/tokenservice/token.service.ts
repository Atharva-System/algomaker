import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { IDecodedToken } from '../../models/decodedtoken.model';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token:string):void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken():string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token:string):void{
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY,token);
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  decodeToken(token:string):IDecodedToken{
    return jwt_decode(token) as IDecodedToken;
  }

  getTokenExpirationTime():Date{
    var decodedToken = this.decodeToken(this.getToken()!);
    return decodedToken.expiration;
  }
}
