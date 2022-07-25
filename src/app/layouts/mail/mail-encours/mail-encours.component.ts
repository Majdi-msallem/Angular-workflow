import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-encours',
  templateUrl: './mail-encours.component.html',
  styleUrls: ['./mail-encours.component.css']
})
export class MailEncoursComponent implements OnInit {
    mailencours:any
  constructor(
    private mailService:MailService
  ) { }

  ngOnInit(): void {
    this.getMailEncours();
  }

  getMailEncours(){
    this.mailService.Mailencours().subscribe(res=>{
        this.mailencours=res
      // console.log("les email en cours ",res)
    })
  }

}
