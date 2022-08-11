import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-list-mail',
  templateUrl: './list-mail.component.html',
  styleUrls: ['./list-mail.component.css']
})
export class ListMailComponent implements OnInit {
  allmail:any
  mailDetails:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""


  constructor(
    private mailService:MailService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    this.getAllMail({ page: 0, size: 5,recherche:this.key });
    
  }
 getAllMail(request){
    this.mailService.AllMail(request).subscribe(res=>{
        this.allmail=res
        ['content'];
      this.collectionSize=res['totalElements'];
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
    this.getAllMail(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    console.log(request)
    this.getAllMail(request);
  
  }
  // Maildetails(mail:any){
  //   this.mailService.GetMailById(mail.idMail).subscribe(res=>{
  //       this.mailDetails=res
  //       // console.log("details de mail",res)
  //   })
  // }
}
