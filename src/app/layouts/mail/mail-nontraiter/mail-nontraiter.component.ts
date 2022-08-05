import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-nontraiter',
  templateUrl: './mail-nontraiter.component.html',
  styleUrls: ['./mail-nontraiter.component.css']
})
export class MailNontraiterComponent implements OnInit {
  mailNontraiter:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
  constructor(
    private mailService:MailService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getMailNonTraiter({ page: 0, size: 5,recherche:this.key });
  }
  DetailsMail(idMail:number){
    this.router.navigate(['admin/mail/details-m',idMail])
  }

  getMailNonTraiter(request){
    this.mailService.MailsNontraiter(request).subscribe(res=>{
        this.mailNontraiter=res ['content'];
        this.collectionSize=res['totalElements'];
       //console.log("les email non traiter ",res)
    })
  }
  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['recherche']=this.key
    console.log(request)
    this.getMailNonTraiter(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    console.log(request)
    this.getMailNonTraiter(request);
  
  }
}
