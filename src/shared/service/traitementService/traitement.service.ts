import { Traitement } from './../../models/Traitement';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  url=environment.url

  constructor(
    private  httpclient :HttpClient,

  ) { }

  //Traitement Rh
  refusedRhTr(idMail:any,fs:any,note:any,etat:any,userName:any,meet:any){
    return this.httpclient.get(this.url+'/process/start/'+ idMail+'/'+fs+'/'+note+'/'+etat+'/'+userName+'/'+meet);
  }

  accpetedRhTr(idMail:any,fs:any,note:any,etat:any,userName:any,meet:any){
    return this.httpclient.get(this.url+'/process/start/'+ idMail+'/'+fs+'/'+note+'/'+etat+'/'+userName+'/'+meet);
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

  //traitement drh 
  refuseddrhTr(idMail:any,ls:any,note:any,etat:any){
    return this.httpclient.get(this.url+'/process/tr3/'+ idMail+'/'+ls+'/'+note+'/'+etat);
  }

  accpeteddrhTr(idMail:any,ls:any,note:any,etat:any){
    return this.httpclient.get(this.url+'/process/tr3/'+ idMail+'/'+ls+'/'+note+'/'+etat);
  }
}
