import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  showMessage(message:string,type:string){
    const toast = Swal.mixin({
      toast:true,
      position:'top',
      showConfirmButton:false,
      timer:3000,
      showCloseButton:true,
      customClass:{
        popup: `colo-${type}`
      },
      target: document.getElementById(type+'-toast') || 'body',
    });

    toast.fire({
      title: message
    });
  }
}
