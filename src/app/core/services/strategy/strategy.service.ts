import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IStrategy, Strategy } from '../../models/stretag.model';
import { ApiCallService } from '../api-call/api-call.service';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private _strategies:BehaviorSubject<Array<IStrategy>> = new BehaviorSubject<Array<IStrategy>>([]);
  public strategies$:Observable<Array<IStrategy>> = this._strategies.asObservable();

  private _strategy:BehaviorSubject<IStrategy> = new BehaviorSubject<IStrategy>(new Strategy());
  public strategy$:Observable<IStrategy> = this._strategy.asObservable();

  constructor(private api:ApiCallService) 
  {
    this.api.getPnLData().subscribe((res) => {
      if(res != null && res != undefined){
        this._strategies.next(res as IStrategy[]);
      }
    });
  }

  setStrategies(){
    this.strategies$ = this.api.getPnLData().pipe(map(res => {
      return res as IStrategy[];
    }))
  }

  setStrategy(name:string){
    this.strategies$.subscribe(res => {
      this._strategy.next(res.filter(x => x.fullname == name)[0] as IStrategy);
    })
  }


}
