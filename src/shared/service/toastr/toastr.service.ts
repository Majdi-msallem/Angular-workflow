import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class myToastrService {

  constructor(private toastr :ToastrService) { }

  showNotification(from, align,color,title1,title2,msg){


    switch(color){
      case 1:
      this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span> ${title1} <b>${title2}</b> ${msg}`, '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-info alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
        this.toastr.success(`<span class="now-ui-icons ui-1_bell-53"></span> ${title1} <b>${title2}</b> ${msg}`, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
      break;
      case 3:
        this.toastr.warning(`<span class="now-ui-icons ui-1_bell-53"></span> ${title1} <b>${title2}</b> ${msg}`, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
      break;
      case 4:
        this.toastr.error(`<span class="now-ui-icons ui-1_bell-53"></span> ${title1} <b>${title2}</b> ${msg}`, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
        
       break;
       case 5:
        this.toastr.show(`<span class="now-ui-icons ui-1_bell-53"></span> ${title1} <b>${title2}</b> ${msg}`, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
      break;
      default:
      break;
    }
}
}
