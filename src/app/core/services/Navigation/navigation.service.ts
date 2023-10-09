import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  zone:NgZone = new NgZone({});

  constructor(private router:Router) { }

  navigateTo(route:string):void{
    this.zone.run(() => {
      this.router.navigate([route]);
    });
  }

  navigateWithParama(route:string,params:any[]):void
  {
    this.zone.run(() => {
      this.router.navigate([route,params]);
    });
  }
}
