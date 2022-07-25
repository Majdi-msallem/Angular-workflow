import { Traitement } from './../../models/Traitement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  url=environment.url

  constructor(
    private  httpclient :HttpClient,

  ) { }

  //Traitement Rh
  refusedRhTr(idMail:any,fs:any,note:any,etat:any,userName:any){
    return this.httpclient.get(this.url+'/process/start/'+ idMail+'/'+fs+'/'+note+'/'+etat+'/'+userName);
  }

  accpeteddRhTr(idMail:any,fs:any,note:any,etat:any,userName:any){
    return this.httpclient.get(this.url+'/process/start/'+ idMail+'/'+fs+'/'+note+'/'+etat+'/'+userName);
  }
  //mailtasksSend by role 
  gettraitementByRoleOfUserConnected(){
    return this.httpclient.get<Traitement>(this.url+'/process/getAllMailByRole')
  }
  //mailtasks Send by user Name 
  listeTasktrTechMailRecuPourLesTraiter(){
    return this.httpclient.get<Traitement>(this.url+'/process/getAllMailByName')
  }

  //traitement technique 
  refusedTechTr(idMail:any,note:any,etat:any){
    return this.httpclient.get(this.url+'/process/tr2/'+ idMail+'/'+note+'/'+etat);
  }

  accpetedTechTr(idMail:any,note:any,etat:any){
    return this.httpclient.get(this.url+'/process/tr2/'+ idMail+'/'+note+'/'+etat);
  }
}
