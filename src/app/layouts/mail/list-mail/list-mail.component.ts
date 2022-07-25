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
  

page:any
colloectionSize:any


  constructor(
    private mailService:MailService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllMail();
    
  }
 getAllMail(){
    this.mailService.AllMail().subscribe(res=>{
        this.allmail=res
      //  console.log("les email",res)
    })
  }
  DetailsMail(idMail:number){
    this.router.navigate(['admin/mail/details-m',idMail])
  }
  // Maildetails(mail:any){
  //   this.mailService.GetMailById(mail.idMail).subscribe(res=>{
  //       this.mailDetails=res
  //       // console.log("details de mail",res)
  //   })
  // }
}
