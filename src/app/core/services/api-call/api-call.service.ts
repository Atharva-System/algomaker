import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  constructor(private socket:Socket) {
  }

  getN_BnTicker(){
    return this.createObserver('ticks');
  }

  getPnLData(){
    return this.createObserver('paper-update')
  }

  private createObserver(event:string){
    this.socket.emit('shubham');
    return this.socket.fromEvent(event);
  }
}
