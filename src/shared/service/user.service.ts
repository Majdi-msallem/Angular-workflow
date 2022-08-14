import { UserAuthService } from './user-auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { userModel } from 'shared/models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
     // PATH="http://127.0.0.1:8090";
      requestHeader = new HttpHeaders(
        {"No-Auth":"True"}
      )
  constructor(
    private  httpclient :HttpClient,
    private userAuthService:UserAuthService
    ) { }
    url=environment.url


  public  login(loginData){
    return this.httpclient.post(this.url + "/auth",loginData,{headers: this.requestHeader})
  }

      public forUser(){
        return this.httpclient.get(this.url + '/user',{
          responseType:'text',
        });
      }

      public forAdmin(){
        return this.httpclient.get(this.url + '/admin',{
          responseType:'text',
        });
      }

  public roleMatch(allowedRoles):boolean{
    let isMatch=false ;
    const userRoles:any =this.userAuthService.getRoles();
    //console.log("roless",userRoles)
    //console.log(allowedRoles)
    if(userRoles!= null && userRoles){
      for(let i=0;i<userRoles.length;i++){
        for(let j=0;j<allowedRoles.length; j++){
        
          if(userRoles[i].roleName==allowedRoles){
            isMatch=true;
            return isMatch;
          }else{
            return isMatch;
          }
        }
      }
    }
  }
  adduser(form: userModel) { 
    return this.httpclient.post(this.url+'/register', form);
  }

  getuser() :Observable<userModel> {
    return this.httpclient.get<userModel>(this.url+'/getuser');
  }
  getuserbyId(id:number): Observable<userModel>{
    return this.httpclient.get<userModel>(this.url+"/getuserById/"+id)
  }
  getalluser(o:any):Observable<userModel>{
    const params = new HttpParams()
  .set('page', o.page)
  .set('size', o.size)
  .set('recherche', o.recherche)
    return this.httpclient.get<userModel>(this.url+'/getalluser',{params})
  }
  getalltechuser():Observable<userModel>{
    return this.httpclient.get<userModel>(this.url+'/getalltechuser')
  }
  deleteUser(id:number){
    return this.httpclient.delete<any>(this.url+ "/deleteUser/"+id).pipe(map((res:any)=>{
      return res ;
    }))
  }
  updateUser(user:any){
    return this.httpclient.put<any>(this.url+ "/updateuser",user);
  }
  verifierCompte(o:any):Observable<userModel>{
    console.log("pppp",o.code)
    const  params = new HttpParams()
    .set('code',o.code)
    return this.httpclient.get<userModel>(this.url+'/verify',{params})
      }
     
   sendEmailForResetPassword(o:any){
    const  params = new HttpParams()
    .set('email',o.email)
    return this.httpclient.get(this.url+'/forgetpassword',{params});
   }
  Resetpassword(token:any,Password:any){
    return this.httpclient.get(this.url+'/resetpassword/'+ token+'/'+Password);
  }
}


