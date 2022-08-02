import { MailService } from './../../../../shared/service/mailService/mail.service';
import { TraitementService } from './../../../../shared/service/traitementService/traitement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-traitement',
  templateUrl: './first-traitement.component.html',
  styleUrls: ['./first-traitement.component.css']
})
export class FirstTraitementComponent implements OnInit {
  mailsrh:any
  pageSize=5
  page=0
  collectionSize:number
  key:string=""
  constructor(
    private mailService:MailService
  ) { }


  ngOnInit(): void {
      this.listemailsPourRH({ page: 0, size: 5,recherche:this.key });
  }
  
 
  listemailsPourRH(request){
    this.mailService.listeMailTR1BYUserConnected(request).subscribe(res=>{
         this.mailsrh=res ['content'];
         console.log("mails",res)
         this.collectionSize=res['totalElements'];
    })
  }
  nextPage(event:any){
    const request = {};
    request['page'] = event-1
    request['size'] = this.pageSize
    request['recherche']=this.key
    console.log(request)
    this.listemailsPourRH(request);
  }


  search(event){
    this.key=event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page=0
    request['recherche']=this.key
    console.log(request)
    this.listemailsPourRH(request);
  
  }

}
