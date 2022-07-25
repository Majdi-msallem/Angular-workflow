import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { mailModel } from 'shared/models/mailModel';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }
  url=environment.url



  AllMail(): Observable<mailModel[]> { 
    return this.http.get<mailModel[]>( this.url+"/getAllMail");
  }
  GetMailById(id:number): Observable<mailModel>{
    return this.http.get<mailModel>(this.url+"/getMailById/"+id)
  }
  downloadPdf(idMail:any,idAtt:any){
    return this.http.get(this.url+"/src"+idMail+'/'+idAtt)
  }
  Mailencours(): Observable<mailModel[]>{
    return this.http.get<mailModel[]>(this.url+"/mailsencours");
  }
  MailsNontraiter(): Observable<mailModel[]>{
    return this.http.get<mailModel[]>(this.url+"/mailsnontraiter");
  }
  Mailstraiter(){
    return this.http.get(this.url+"/mailstraiter");
  }
}
