import { UserService } from 'shared/service/user.service';
import { UserAuthService } from 'shared/service/user-auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class RoleGuard implements CanActivate {
        currentUser:any;
        roles:any
        constructor(
            private userService:UserService,
            private userAuthService:UserAuthService
            ){}

    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
     
 
     this.roles= this.userAuthService.getRoles();
    console.log("roles this",this.roles)
  
   const isAuthorized = this.roles[0].roleName.includes(route.data.role)
                 if(!isAuthorized){
                    window.alert("Vous n'etes pas autoriser")
                 }
    return isAuthorized ;
    
    }
  } 