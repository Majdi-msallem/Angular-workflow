import { myToastrService } from './../../shared/service/toastr/toastr.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'shared/service/user-auth.service';
import { UserService } from 'shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    data : Date = new Date();
    focus;
    focus1;

    



    constructor(
      private userService:UserService, 
      private userAuthService:UserAuthService,
      private router:Router,
      private toastr:myToastrService
      ) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

       
    }
    login(loginForm:NgForm){
     this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        //console.log(response.jwtToken);
        //console.log("role",response.user.role[0]);

        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

       const role=  response.user.role[0].roleName;
       if(response.user.enabled==1){
        if(role=='d_rh'){
          this.router.navigate(['/admin/dashboard'])
         }else if (role =='rh'){
          this.router.navigate(['/admin/mail'])
         }else if(role=='tech'){
          this.router.navigate(['/admin/mail/listMailsForTechconnected'])
         }
         this.toastr.showNotification("top","right",2,"connexion"," avec succès",".......")

       }else{
        //this.router.navigate(['/admin/dashboard'])
        alert("vous devez activez votre compte par email")
       }
      
      },
      (error)=>{
        this.toastr.showNotification("top","right",4,"error:",error.error.message,".......")
        console.log(error);
      }
     );
    }
    ngOnDestroy(){

    }

}
