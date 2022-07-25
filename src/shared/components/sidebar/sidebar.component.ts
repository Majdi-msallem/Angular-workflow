import { role } from 'shared/models/Role';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { userModel } from 'shared/models/User';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    roleName:string [];
    
}
export const ROUTES: RouteInfo[] = [
  //DRH
     {path:'/admin/mail/listMailsForDRH', title:'Liste mails DRH ', icon:'ui-1_email-85', class: '',roleName:["d_rh"]},
    //user 
    { path: '/admin/user/add', title: 'Ajouter un utlisateur',  icon:'users_single-02', class: '',roleName:["d_rh"] },
    { path: '/admin/user/list-u', title: 'Liste des utilisateurs',  icon:'ui-1_email-85 && users_single-02', class: '',roleName:["d_rh"] },

    //mail
      {path:'/admin/mail/list-m', title:'Liste mails ', icon:'ui-1_email-85', class: '',roleName:["rh","d_rh"]},
      {path:'/admin/mail/list-mnt', title:'Mails Non traiter', icon:'ui-1_settings-gear-63', class: '',roleName:["rh","d_rh"]},
      {path:'/admin/mail/list-mc', title:'Mails encours', icon:'arrows-1_refresh-69',class: '',roleName:["rh","d_rh"]},
      {path:'/admin/mail/list-mt', title:'Mails Traiter', icon:'ui-1_check', class: '',roleName:["rh","d_rh"]},

    //traitement 
    {path:'/admin/mail/first-tr', title:'Traitement Rh', icon:'business_badge', class: '',roleName:["rh","d_rh"]},
    {path:'/admin/mail/second-tr', title:'Traitement technique', icon:'tech_laptop', class: '',roleName:["tech","d_rh"]},

    //role
      { path: '/admin/role/list-r', title: 'Liste Role',  icon:'design_bullet-list-67', class: '',roleName:["d_rh"] },
    //user tech

    


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[]=[];
  user:userModel=new userModel()

  constructor(public userService:UserService) {
   }

 ngOnInit() {

 
  this.userService.getuser().subscribe(
    (user)=> {  console.log("path",user)
    ROUTES.forEach(menuItem =>{
    user.role.forEach(element => {
      console.log("element",element)
    if(menuItem.roleName.includes(element.roleName))
    this.menuItems.push(menuItem)

  })})
 

},error => console.log(error));
}

//console.log(this.menuItems)


  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
