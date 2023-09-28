import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/core/services/app.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-applayout',
  standalone: true,
  imports: [CommonModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RouterModule
  ],
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent implements OnInit {
  store:any;
  showTopButton = false;
  headerClass = '';

  constructor(
    public translate: TranslateService,
    public storeData: Store<any>,
    private service:AppService,
    private router:Router
  ){
    this.initStore();
  }

  ngOnInit(): void {
    this.initAnimation();
    this.toggleLoader();
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        this.showTopButton = true;
      } else {
        this.showTopButton = false;
      }
    });
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('scroll',() => {});
  }

  initAnimation(){
    this.service.changeAnimation();
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.service.changeAnimation();
      }
    });

    const ele:any = document.querySelector('.animation');
    ele.addEventListener('animationend', () => {
      this.service.changeAnimation('remove');
    });
  }

  toggleLoader(){
    this.storeData.dispatch({type:'toggleMainLoader', payload: true});
    setTimeout(() => {
      this.storeData.dispatch({type:'toggleMainLoader', payload: false});
    },500);
  }

  async initStore(){
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
