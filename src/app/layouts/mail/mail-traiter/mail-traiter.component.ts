import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-traiter',
  templateUrl: './mail-traiter.component.html',
  styleUrls: ['./mail-traiter.component.css']
})
export class MailTraiterComponent implements OnInit {
  mailtraiter:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
  constructor(
    private mailService:MailService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getMailTraiter({ page: 0, size: 5,recherche:this.key });
  }
  getMailTraiter(request){
    this.mailService.Mailstraiter(request).subscribe(res=>{
        this.mailtraiter=res
        ['content'];
        this.collectionSize=res['totalElements'];
     // console.log("les email traiter ",res)
    })
  }
  DetailsMail(idMail:number){
    this.router.navigate(['admin/mail/details-m',idMail])
  }
  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['recherche']=this.key
    console.log(request)
    this.getMailTraiter(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    console.log(request)
    this.getMailTraiter(request);
  
  }
}
