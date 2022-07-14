import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    permissions:string [];
    
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'design_app', class: '',permissions:["tritux"]},
  
    
    { path: '/admin/demande/alldemande', title: 'Mes demandes',  icon:'users_single-02', class: '' ,permissions:["add_conge"]},
    { path: '/admin/demande/demanderecue', title: ' demandes en attentes',  icon:'users_single-02', class: '',permissions:["A/R_conge"] },
    { path: '/admin/users/adduser', title: 'users',  icon:'users_single-02', class: '',permissions:["add_user"] },
   

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() {
   }

 ngOnInit() {

}
  
//console.log(this.menuItems)


  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
