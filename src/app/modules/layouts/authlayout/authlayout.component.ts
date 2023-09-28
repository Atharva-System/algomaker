import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/core/services/app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.css']
})
export class AuthlayoutComponent implements OnInit,OnDestroy {
  store:any;
  showTopButton = false;

  constructor(public storeData: Store<any>, private service: AppService){
    this.initStore();
  }

  headerClass = '';

  ngOnInit(): void {
    this.toggleLoader();
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            this.showTopButton = true;
        } else {
            this.showTopButton = false;
        }
    });
  }

  toggleLoader() {
    this.storeData.dispatch({ type: 'toggleMainLoader', payload: true });
    setTimeout(() => {
        this.storeData.dispatch({ type: 'toggleMainLoader', payload: false });
    }, 500);
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', () => {});
  }

  async initStore() {
      this.storeData
          .select((d) => d.index)
          .subscribe((d) => {
              this.store = d;
          });
  }

  goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
