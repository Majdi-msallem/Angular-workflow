import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-encours',
  templateUrl: './mail-encours.component.html',
  styleUrls: ['./mail-encours.component.css']
})
export class MailEncoursComponent implements OnInit {
    mailencours:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""

  constructor(
    private mailService:MailService
  ) { }

  ngOnInit(): void {
    this.getMailEncours({ page: 0, size: 5,recherche:this.key });
  }

  getMailEncours(request){
    this.mailService.Mailencours(request).subscribe(res=>{
        this.mailencours=res['content'];
        this.collectionSize=res['totalElements'];
      // console.log("les email en cours ",res)
    })
  }
  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['recherche']=this.key
    console.log(request)
    this.getMailEncours(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    console.log(request)
    this.getMailEncours(request);
  
  }

}
