import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from 'src/app/core/services/api-call/api-call.service';
import { ClockComponent } from 'src/app/shared/components/clock/clock.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,ClockComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  subs:Subscription[] = [];
  localData:string = '';
  ticks:any;
  niftyTicker = 0;
  bankniftyTicker = 0;

  constructor(private api:ApiCallService){
  }

  ngOnInit(): void {
      this.subs.push(
        this.api.getInitialData().subscribe(data=>{
          this.ticks = data;
          if(this.ticks['256265'] != undefined)
            this.niftyTicker = this.ticks['256265'];
          
          if(this.ticks['260105'] != undefined)
            this.bankniftyTicker = this.ticks['260105'];
        })
      );

      this.subs.push(
        this.api.getUpdatedData().subscribe(data=>{
          this.ticks = data;
          if(this.ticks['256265'] != undefined)
            this.niftyTicker = this.ticks['256265'];
          
          if(this.ticks['260105'] != undefined)
            this.bankniftyTicker = this.ticks['260105'];
        })
      )
  }

  ngOnDestroy(): void {
      this.subs.forEach(subscription => { subscription.unsubscribe() });
  }

}

interface ServerResponse{
  prods:any[];
  type?:string;
}