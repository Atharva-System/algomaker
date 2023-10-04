import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from 'src/app/core/services/api-call/api-call.service';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { Subscription } from 'rxjs';
import { StretagyboxComponent } from 'src/app/shared/components/stretagybox/stretagybox.component';
import { IStrategy } from 'src/app/core/models/stretag.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,ClockComponent,StretagyboxComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  subs:Subscription[] = [];
  localData:string = '';
  ticks:any;
  niftyTicker = 0;
  bankniftyTicker = 0;
  strategies:IStrategy[] = [];

  constructor(private api:ApiCallService,private router:Router){
    this.strategies = [
      {
        name:'STG1',
        value: '+20,000'
      },
      {
        name:'STG2',
        value: '-10,000'
      },
      {
        name:'STG3',
        value: '+25,000'
      },
      {
        name:'STG4',
        value: '+21,800'
      },
      {
        name:'STG5',
        value: '-18,000'
      },
      {
        name:'STG6',
        value: '-11,000'
      },
      {
        name:'STG7',
        value: '+23,000'
      },
      {
        name:'STG8',
        value: '+19,000'
      },
      {
        name:'STG9',
        value: '-1,000'
      },
      {
        name:'STG10',
        value: '+20,000'
      },
      {
        name:'STG11',
        value: '+20,500'
      },
      {
        name:'STG12',
        value: '+20,800'
      },
      {
        name:'STG13',
        value: '+32,000'
      },
      {
        name:'STG14',
        value: '+50,000'
      },
      {
        name:'STG15',
        value: '-3,000'
      },
    ]
  }

  ngOnInit(): void {
      this.subs.push(
        this.api.getInitialData().subscribe(data=>{
          this.ticks = data;
          if(this.ticks['nifty'] != undefined)
            this.niftyTicker = this.ticks['nifty'];

          if(this.ticks['bank_nifty'] != undefined)
            this.bankniftyTicker = this.ticks['bank_nifty'];
        })
      );

      this.subs.push(
        this.api.getUpdatedData().subscribe(data=>{
          this.ticks = data;
          if(this.ticks['nifty'] != undefined)
            this.niftyTicker = this.ticks['nifty'];

          if(this.ticks['bank_nifty'] != undefined)
            this.bankniftyTicker = this.ticks['bank_nifty'];
        })
      )
  }

  navigateToStrategyDetail(name:string){
    this.router.navigate(['/app/Stragtegy',name])
  }

  ngOnDestroy(): void {
      this.subs.forEach(subscription => { subscription.unsubscribe });
  }

}