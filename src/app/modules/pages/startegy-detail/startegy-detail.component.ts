import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStrategy, Strategy } from 'src/app/core/models/stretag.model';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { LetDirective } from '@ngrx/component';
import { StrategyService } from 'src/app/core/services/strategy/strategy.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CardBodyComponent } from 'src/app/shared/components/card/card-body/card-body.component';

@Component({
  selector: 'app-startegy-detail',
  standalone: true,
  imports: [CommonModule,LetDirective,CardComponent,CardBodyComponent],
  templateUrl: './startegy-detail.component.html',
  styleUrls: ['./startegy-detail.component.css']
})
export class StartegyDetailComponent implements OnInit {
  strategy$:Observable<IStrategy> = new Observable<IStrategy>();
  strategyName:string = '';

  constructor(private route:ActivatedRoute,private service:StrategyService){
    this.route.params.subscribe(res => {
      this.service.setStrategy(res['name']);
    })
    this.strategy$ = this.service.strategy$.pipe(map(res => {
      return res;
    }))
  }
  ngOnInit(): void {
    this.strategy$ = this.service.strategy$.pipe(map(res => {
      return res;
    }))

    this.strategy$.subscribe(res => {
      console.log(res);
    })
  }


}
