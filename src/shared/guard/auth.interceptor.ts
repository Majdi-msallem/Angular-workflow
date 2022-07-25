import { Router } from '@angular/router';
import {  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UserAuthService } from 'shared/service/user-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private userAuthService:UserAuthService,
        private router:Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get("No-Auth")==='true'){
            return next.handle(req.clone());
        }
        const token=this.userAuthService.getToken();

        if(token){
          req=   req.clone(
            {
                setHeaders:{
                    Authorization : `Bearer ${token}`
                }
            }
        )


        }
       
        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status === 401){
                        //this.router.navigate(['/login']);
                    }else if (err.status === 403){
                       // this.router.navigate(['/login']);
                    }
                    throwError("Some thing is wrong when you want to login.....")
                    return throwError(err.message || err);


                }
            )
        );
    }

    // private addToken(request:HttpRequest<any>,token:string){
    //     return request.clone(
    //         {
    //             setHeaders:{
    //                 Authorization : `Bearer ${token}`
    //             }
    //         }
    //     )
    // }
    
}