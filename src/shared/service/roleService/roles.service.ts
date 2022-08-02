import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { role } from 'shared/models/Role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {


  constructor(private http:HttpClient) { }
  url=environment.url


  addRole(data:any){
    return this.http.post<any>(this.url +"/createNewRole",data).pipe(map((res:any)=>{
      return res ;
    }))
  }

  getAllrole(): Observable<role[]> { 
    return this.http.get<role[]>(this.url + "/getAllRole");
  }

  deleteRole(idRole:number){
    return this.http.delete<any>(this.url+ "/deleteRole/"+idRole).pipe(map((res:any)=>{
      return res ;
    }))
  }
}
