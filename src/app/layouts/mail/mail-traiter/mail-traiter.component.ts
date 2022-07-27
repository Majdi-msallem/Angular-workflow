import { MailService } from './../../../../shared/service/mailService/mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-traiter',
  templateUrl: './mail-traiter.component.html',
  styleUrls: ['./mail-traiter.component.css']
})
export class MailTraiterComponent implements OnInit {
  mailtraiter:any
  constructor(
    private mailService:MailService
  ) { }

  ngOnInit(): void {
    this.getMailTraiter();
  }
  getMailTraiter(){
    this.mailService.Mailstraiter().subscribe(res=>{
        this.mailtraiter=res
      console.log("les email traiter ",res)
    })
  }
}
