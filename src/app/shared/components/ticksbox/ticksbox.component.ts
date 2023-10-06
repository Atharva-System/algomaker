import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardBodyComponent } from '../card/card-body/card-body.component';

@Component({
  selector: 'app-tickbox',
  standalone: true,
  imports: [CommonModule,CardComponent,CardBodyComponent],
  templateUrl: './ticksbox.component.html',
  styleUrls: ['./ticksbox.component.css']
})
export class TicksboxComponent {
  @Input() TickName:string = '';
  @Input() TickValue:number = 0; 
}
