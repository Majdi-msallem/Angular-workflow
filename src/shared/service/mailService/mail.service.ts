import { HttpClient, HttpParams } from '@angular/common/http';
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



  AllMail(o:any): Observable<mailModel[]> { 
    const params = new HttpParams()
    .set('page', o.page)
    .set('size', o.size)
    .set('recherche', o.recherche)
    return this.http.get<mailModel[]>( this.url+"/getAllMail",{params});
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
  listeMailTR1BYUserConnected():Observable<mailModel[]>{
    return this.http.get<mailModel[]>(this.url+"/listeMailsGeneratedByName");
  }
}
