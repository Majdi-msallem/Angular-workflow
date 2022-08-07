import { Component, OnInit } from '@angular/core';
import { MailService } from 'shared/service/mailService/mail.service';

@Component({
  selector: 'app-tech-list-mail',
  templateUrl: './tech-list-mail.component.html',
  styleUrls: ['./tech-list-mail.component.css']
})
export class TechListMailComponent implements OnInit {
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
  mailstech:any
  constructor(private mailService:MailService) { }

  ngOnInit(): void {
    this.listmailstech({ page: 0, size: 5,recherche:this.key });
  }
  listmailstech(request){
    this.mailService.listeMailTR2BYUserConnected(request).subscribe(res=>{
         this.mailstech=res ['content'];
         console.log("mails",res)
         this.collectionSize=res['totalElements'];
    })
  }
  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['recherche']=this.key
    //console.log(request)
    this.listmailstech(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    //console.log(request)
    this.listmailstech(request);
  
  }
}
