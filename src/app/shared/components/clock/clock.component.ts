import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, share, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit,OnDestroy {
  time = new Date();
  rxTime = new Date();
  intervalId:any;
  subscription:any;

  ngOnInit(): void {
      this.intervalId = setInterval(() => {
        this.time = new Date();
      },1000);
      
      this.subscription = timer(0,1000)
        .pipe(
          map(() => new Date()),
          share()
        ).subscribe(time => {
          this.rxTime = time;
        });
  }

  ngOnDestroy(): void {
      clearInterval(this.intervalId);
      if(this.subscription)
      {
        this.subscription.unsubcribe;
      }
  }
}
