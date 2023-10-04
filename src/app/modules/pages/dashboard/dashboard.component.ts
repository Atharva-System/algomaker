import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from 'src/app/core/services/api-call/api-call.service';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { Observable, Subscription, map } from 'rxjs';
import { StretagyboxComponent } from 'src/app/shared/components/stretagybox/stretagybox.component';
import { IStrategy, Strategy } from 'src/app/core/models/stretag.model';
import { Router, RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { StrategyService } from 'src/app/core/services/strategy/strategy.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,ClockComponent,StretagyboxComponent,LetDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  localData: string = '';
  ticks: any;
  niftyTicker = 0;
  bankniftyTicker = 0;
  accounts: any[] = [];
  strategies$:Observable<Array<IStrategy>> = new Observable<Array<IStrategy>>();

  constructor(private api:ApiCallService,private router:Router,private service:StrategyService){
  }

  ngOnInit(): void {
    this.subs.push(
      this.api.getN_BnTicker().subscribe(data => {
        this.ticks = data;
        if (this.ticks['nifty'] != undefined)
          this.niftyTicker = this.ticks['nifty'];

        if (this.ticks['bank_nifty'] != undefined)
          this.bankniftyTicker = this.ticks['bank_nifty'];
      })
    );
    this.strategies$ = this.service.strategies$.pipe(map(res => {
      return res;
    }))
  }

  navigateToStrategyDetail(name:string){
    this.router.navigate(['/app/Stragtegy',name])
  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => { subscription.unsubscribe });
  }

}