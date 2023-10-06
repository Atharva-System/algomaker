import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TokenService } from '../../services/tokenservice/token.service';
import { ToasterService } from '../../services/toaster/toaster.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService,private toaster:ToasterService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        'Content-Type': 'application/json',
      }
    });

    const token = this.tokenService.getToken();
    if(token && !request.url.includes('login')){
      const tokenExpiration = this.tokenService.getTokenExpirationTime();
      if(tokenExpiration < new Date()){
        // call handle401Erro
      }
      request.headers.append(
        'Authorization',
        `Bearer ${token}`
      );
    }

    return next.handle(request).pipe(
      map((res:any) => {
        return res;
      }),
      catchError((error:any) => {
        let errorMessage = '';
        if(error.status === 401 && (this.tokenService.getToken() !== null && this.tokenService.getToken() !== undefined))
        {
          // call handle401Erro
        } else if(error.status === 400){
          errorMessage = error.error.errors.join(',');
        } else {
          errorMessage = error.error.message || error.message;
        }
        this.toaster.showMessage(errorMessage,'danger')
        return throwError(() => new Error(`Error: ${errorMessage}`));
      })
    );
  }

  handle401Error(request:HttpRequest<any>,token:string){
    
  }
}
