import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-nontraiter',
  templateUrl: './mail-nontraiter.component.html',
  styleUrls: ['./mail-nontraiter.component.css']
})
export class MailNontraiterComponent implements OnInit {
  mailNontraiter:any
  constructor(
    private mailService:MailService
  ) { }

  ngOnInit(): void {
    this.getMailNonTraiter();
  }

  getMailNonTraiter(){
    this.mailService.MailsNontraiter().subscribe(res=>{
        this.mailNontraiter=res
       console.log("les email non traiter ",res)
    })
  }
}
