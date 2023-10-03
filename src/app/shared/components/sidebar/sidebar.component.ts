import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
// perfect-scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';
import { slideDownUp } from '../../animations/slideDownUp.animation';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,TranslateModule,NgScrollbarModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [slideDownUp]
})
export class SidebarComponent implements OnInit {
  active = false;
  store:any;
  activeDropdown: string[] = [];
  parentDropdown: string = '';
  constructor(public translate:TranslateService,public storeData:Store<any>, public router:Router){
    this.initStore();
  }

  async initStore(){
    this.storeData
      .select((d) => d.index)
      .subscribe((d) => {
        this.store = d;
      });
  }

  ngOnInit(): void {
    
  }

  setActiveDropdown(){
    const selector = document.querySelector('.sidebar ul a[routerLink="'+ window.location.pathname +'"]');
    if(selector)
    {
      selector.classList.add('active');
      const ul:any = selector.closest('ul.sub-menu');
      if(ul){
        let ele: any  = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
        if(ele.length){
          ele = ele[0];
          setTimeout(() => {
              ele.click();
          });
        }
      }
    }
  }

  toggleMobileMenu() {
    if (window.innerWidth < 1024) {
        this.storeData.dispatch({ type: 'toggleSidebar' });
    }
  }

  toggleAccordion(name: string, parent?: string) {
      if (this.activeDropdown.includes(name)) {
          this.activeDropdown = this.activeDropdown.filter((d) => d !== name);
      } else {
          this.activeDropdown.push(name);
      }
  }
}
