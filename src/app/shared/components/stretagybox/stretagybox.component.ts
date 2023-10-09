import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStrategy, Strategy } from 'src/app/core/models/stretag.model';

@Component({
  selector: 'app-stretagybox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretagybox.component.html',
  styleUrls: ['./stretagybox.component.css']
})
export class StretagyboxComponent {

  @Input() strategy:IStrategy = new Strategy();

  constructor(){
  }
}
